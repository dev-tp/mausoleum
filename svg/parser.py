import os
import subprocess

from string import Template
from xml.etree import ElementTree

namespace = "http://www.w3.org/2000/svg"
prefix = "{" + namespace + "}"


def create_js_file(svg_file_name):
    ElementTree.register_namespace("", namespace)
    tree = ElementTree.parse(svg_file_name)

    root = tree.getroot()
    root.attrib.clear()
    root.tag = "SVG"

    file_name = generate_js_file_name(svg_file_name)
    path = f"../components/generated/{file_name}"

    try:
        os.makedirs(os.path.dirname(path))
    except OSError:
        pass

    style = None

    for i, element in enumerate(root):
        if i == 0:
            # with open(f"{path}.css", "w") as file:
            #     file.write(element.text)
            style = element
        elif i == 1:
            for child in element:
                if "class" in child.attrib:
                    child.attrib["className"] = child.attrib["class"]
                    del child.attrib["class"]
        else:
            element.clear()
            element.text = "{render()}"

    root.remove(style)

    with open("template.js") as template_file:
        template = Template(template_file.read())

        with open(f"{path}.js", "w") as javascript_file:
            javascript_file.write(
                template.substitute({
                    "name":
                    file_name,
                    "body":
                    ElementTree.tostring(root, "unicode", "xml"),
                    "url":
                    generate_uri(svg_file_name),
                }))


def generate_js_file_name(svg_file_name):
    tokens = svg_file_name.replace(".svg", "").split(" - ", 1)
    tokens[0] = tokens[0].title()

    return "".join(token.replace(" ", "") for token in tokens).replace("-", "")


def generate_uri(svg_file_name):
    tokens = svg_file_name.replace(".svg", "").split(" - ", 1)

    for i in range(len(tokens)):
        tokens[i] = tokens[i].strip().replace(" ", "-").lower()

    return "_".join(tokens)


def get_crypts_and_niches(svg_file_name):
    root = ElementTree.parse(svg_file_name).getroot()
    uri = generate_uri(svg_file_name)

    # Crypts and niches are encapsuled in the last g-tag
    target = [child for child in root if child.tag == f"{prefix}g"][-1]

    d, x, y, text = None, None, None, None
    lines = []

    for child in target:
        if child.tag == f"{prefix}path":
            d = child.attrib["d"]
        elif child.tag == f"{prefix}text":
            x = child.attrib["x"]
            y = child.attrib["y"]
            text = child.text

        if d != None and x != None and y != None:
            lines.append(f"{uri},{d},{x},{y},{text}")
            d, x, y, text = None, None, None, None

    return lines


def main():
    file_names = sorted(item for item in os.listdir()
                        if ".svg" in item and item != "mausoleum.svg")
    routes = []

    with open("crypts_and_niches.csv", "w") as out:
        out.write("location,d,x,y,space_number\n")

        for file_name in file_names:
            for line in get_crypts_and_niches(file_name):
                out.write(line + "\n")

            create_js_file(file_name)

            routes.append({
                "component": generate_js_file_name(file_name),
                "label": file_name.replace(".svg", ""),
                "path": generate_uri(file_name),
            })

    with open("../pages/_routes.js", "w") as out:
        for route in routes:
            line = "import {0} from '../components/generated/{0}';\n"
            out.write(line.format(route["component"]))

        out.write("\nconst routes = {\n")

        for route in routes:
            out.write(f"  '{route['path']}': {{\n"
                      f"    component: {route['component']},\n"
                      f"    label: '{route['label']}',\n"
                      "  },\n")

        out.write("};\n")
        out.write("\nexport default routes;\n")

    try:
        subprocess.call(["prettier", "--write", "../components/generated"])
    except FileNotFoundError:
        print("Prettier is not installed. Run `npm i -g prettier` to format "
              "generated JavaScript files.")


if __name__ == "__main__":
    main()
