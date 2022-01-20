import csv
import mysql.connector


def main():
    with open("crypts_and_niches.csv") as csv_file:
        reader = csv.reader(csv_file)

        connection = mysql.connector.connect(user="admin",
                                             password="password",
                                             host="127.0.0.1",
                                             database="mausoleum")

        cursor = connection.cursor()

        insert_statement = ("INSERT INTO ossuary "
                            "(uri, d, x, y, space_number) "
                            "VALUES (%s, %s, %s, %s, %s)")

        next(reader)

        for line in reader:
            print(line)
            cursor.execute(insert_statement, line)

        connection.commit()

        cursor.close()
        connection.close()


if __name__ == "__main__":
    main()
