import os
import subprocess

from string import Template
from xml.etree import ElementTree

namespace = 'http://www.w3.org/2000/svg'
prefix = '{' + namespace + '}'


def create_js_file(svg_file_name):
    ElementTree.register_namespace('', namespace)
    tree = ElementTree.parse(svg_file_name)

    root = tree.getroot()
    root.attrib.clear()
    root.tag = 'SVG'

    target = None

    for child in root:
        if child.tag == f"{prefix}g":
            target = child
        elif child.tag == f"{prefix}style":
            root.remove(child)

    target.clear()
    target.text = '{render()}'

    with open('template.js') as template_file:
        template = Template(template_file.read())

        file_name = generate_js_file_name(svg_file_name)
        path = f"../components/{file_name}.js"

        try:
            os.makedirs(os.path.dirname(path))
        except OSError:
            pass

        with open(path, 'w') as javascript_file:
            javascript_file.write(template.substitute({
                'name': file_name,
                'body': ElementTree.tostring(root, 'unicode', 'xml'),
                'url': generate_uri(svg_file_name),
            }))


def generate_js_file_name(svg_file_name):
    tokens = svg_file_name.replace('.svg', '').split(' - ', 1)
    tokens[0] = tokens[0].title()

    return ''.join(token.replace(' ', '') for token in tokens).replace('-', '')


def generate_uri(svg_file_name):
    tokens = svg_file_name.replace('.svg', '').split(' - ', 1)

    for i in range(len(tokens)):
        tokens[i] = tokens[i].strip().replace(' ', '_').lower()

    return '/'.join(tokens)


def get_crypts_and_niches(svg_file_name):
    root = ElementTree.parse(svg_file_name).getroot()
    uri = generate_uri(svg_file_name)

    # Crypts and niches are encapsuled in the last g-tag
    target = [child for child in root if child.tag == f"{prefix}g"][-1]

    d, x, y, text = None, None, None, None
    lines = []

    for child in target:
        if child.tag == f"{prefix}path":
            d = child.attrib['d']
        elif child.tag == f"{prefix}text":
            x = child.attrib['x']
            y = child.attrib['y']
            text = child.text

        if d != None and x != None and y != None:
            lines.append(f"{uri},{d},{x},{y},{text}")
            d, x, y, text = None, None, None, None

    return lines


def main():
    file_names = sorted(item for item in os.listdir()
                        if '.svg' in item and item != 'mausoleum.svg')

    with open('crypts_and_niches.csv', 'w') as csv_file:
        csv_file.write('location,d,x,y,space_number\n')

        for file_name in file_names:
            for line in get_crypts_and_niches(file_name):
                csv_file.write(line + '\n')

            create_js_file(file_name)

    subprocess.call(['prettier', '--write', '../components'])


if __name__ == '__main__':
    main()
