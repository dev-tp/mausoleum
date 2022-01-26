import csv

from dotenv import dotenv_values
from pymongo import MongoClient


def parse_line(location, class_name, d, x, y, space_number):
    return {
        'location': location,
        'class_name': class_name,
        'd': d,
        'x': int(float(x)),
        'y': int(float(y)),
        'space_number': space_number,
        'contract_number': '',
        'patron': '',
        'designee': '',
        'date_of_birth': None,
        'date_of_death': None,
        'date_of_internment': None,
        'status': 0,
    }


def main():
    with open('mausoleum.csv') as csv_file:
        config = dotenv_values('../.env.local')
        reader = csv.reader(csv_file)

        client = MongoClient(config['MONGODB_URI'])
        database = client[config['MONGODB_DB_NAME']]

        next(reader)

        for line in reader:
            document = parse_line(*line)
            result = database.mausoleum.insert_one(document)

            print(result.inserted_id)


if __name__ == '__main__':
    main()
