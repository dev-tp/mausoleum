import os

from xml.etree import ElementTree


def generate_uri(svg_file_name):
    tokens = svg_file_name.replace('.svg', '').split(' - ', 1)

    for i in range(len(tokens)):
        tokens[i] = tokens[i].strip().replace(' ', '_').lower()

    return '/'.join(tokens)


def get_crypts_and_niches(svg_file_name):
    prefix = '{http://www.w3.org/2000/svg}'
    uri = generate_uri(svg_file_name)

    root = ElementTree.parse(svg_file_name).getroot()

    # Crypts and niches are encapsuled in the last g-tag
    target = [child for child in root if child.tag == f"{prefix}g"][-1]

    d, x, y = None, None, None
    lines = []

    for child in target:
        if child.tag == f"{prefix}path":
            d = child.attrib['d']
        elif child.tag == f"{prefix}text":
            x = child.attrib['x']
            y = child.attrib['y']

        if d != None and x != None and y != None:
            lines.append(f"{uri},{d},{x},{y}")
            d, x, y = None, None, None

    return lines


def main():
    file_names = sorted(item for item in os.listdir()
                        if '.svg' in item and item != 'mausoleum.svg')

    with open('crypts_and_niches.csv', 'w') as csv_file:
        csv_file.write('location,d,x,y\n')

        for file_name in file_names:
            for line in get_crypts_and_niches(file_name):
                csv_file.write(line + '\n')


if __name__ == '__main__':
    main()
