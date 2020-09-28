# Food-Waste-App
Team Name: Unplugged Tech Crew

Team Topic: Food Waste App

Team Members:

Balan Diana-Iuliana: Product Owner

Caragioiu Miruna-Ioana: Project Manager

Tofan Radu: Software Developer

Topi Kosta: Design Developer

Introducere

Risipa de alimente este o problema mondiala de mari proportii. Statisticile spun ca anual, în România, aproximativ o treime din produse sunt irosite. Scopul aplicatiei noastre este de a oferi posibilitatea utilizatorilor de a dona alimentele pe care nu le consuma prietenilor sau altor utilizatori interesati.

Cui se adreseaza aceasta aplicatie?

Aplicatia noastra este destinata tuturor persoanelor care vor sa faca o diferenta si sa ajute la prevenirea risipei alimentare.

Tehnologii utilizate

Front-end-ul este dezvoltat folosind framework-ul ReactJS, iar în dezvoltarea back-end-ului am folosit ExpressJS. Datele sunt stocate într-o baza de date MySQL folosind pentru manipulare ORM Sequelize.

API REST

-POST/user
-GET/user
-GET/user:email
-UPDATE/user:email
-POST/product
-GET/product
-GET/product:id
-DELETE/product:id
-UPDATE/product:id

POSTMAN
Request: POST/user

Request body schema:

email: STRING
firstName: STRING
lastName: STRING
password: STRING
city: STRING
phoneNumber: STRING

Response:
201 User added successfully.
400 Invalid user payload.

Request:
GET/user

Response:
[{ "email":"m@yahoo.com"
"firstName": "Miruna"
"lastName": "Caragioiu"
"password": 12345
"city": Bucuresti
"phoneNumber": 25485452
}]

Request:
POST/product

Request body schema:
id: INTEGER
name: STRING
productStatus: STRING
expirationDate: DATE
category: STRING
quantity: INTEGER
producer: STRING
claimedBy: STRING

Response:
201 Product added successfully
400 Invalid product payload.

Request:
GET/product

Response:
[{ "id": 2
"name":"cascaval"
"productStatus": "disponibil"
"expirationDate": "2020-12-12"
"category": "lactate:
"quantity": "3"
"producer": "covalact"
"claimedBy": ""
}]
