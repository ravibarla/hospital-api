live url :- "https://hospital-api-58xl.onrender.com"

project title : "hospital-api"

project description : This is a hospital-api node app. That can perform certain operation of a doctor and their patient's.

features :-

1. register a doctor
2. get all doctor's list
3. delete a doctor
4. register a patient
5. get all the patients
6. create a report of any patient
7. get the report of any patient
8. get the report based on some filter

built using :-

1. node js
2. express js
3. ejs template engine
4. css
5. bootstrap
6. html 
7. mongodb
8. jwt

deployment platform :-

1. [Render]

Tech  :-

1. [node-js]
2. [express-js]
3. [ejs-template-engine]
4. [css]
5. [bootstrap]
6. [html] 
7. [mongodb]
8. [jwt]

   
## Plugins

Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| GitHub | [plugins/github/README.md]


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[HTML]:<https://developer.mozilla.org/en-US/docs/Web/HTML>
[CSS]:<https://developer.mozilla.org/en-US/docs/Learn/CSS>
[node-js]:<https://nodejs.org/en>
[express-js]:<https://expressjs.com/>
[ejs-template-engine]: <https://ejs.co/>
[bootstrap]: <https://getbootstrap.com/>
[render]: <https://dashboard.render.com/>
[mongodb]:<https://www.mongodb.com/>
[jwt]:<https://jwt.io/>

api :-

I.doctor :-


1. API :- Login

   API Description :- This is a Login API which takes "username" and "password" as a request body and returns the userToken that wil be further used in the access of other APIs

    
curl --location --request POST 'https://hospital-api-58xl.onrender.com/doctors/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username":"ravidoctor1",
    "password":"123"
}'  

requestUrl :- 'https://hospital-api-58xl.onrender.com/doctors/login'
method :- POST
header :- 'Content-Type: application/json' 
requestBody :- 
   {   
      "username":"ravidoctor1",
       "password":"123"
   }

responseBody :- 
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhdmlkb2N0b3IxIiwiaWF0IjoxNzA1NDcwOTUxLCJleHAiOjE3MDU0NzQ1NTF9.NqNP3giTQAttkFihy7gkhy-LdGm7IWopop7sD_OXehQ

   

2. API :- GetALlDoctorUser
 Description :- This API returns all the registered doctor user. The API takes a request parameter in the header "Authorization" with its value that will be a userToken.

    curl --location --request GET 'https://hospital-api-58xl.onrender.com/doctors' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhdmlkb2N0b3IxIiwiaWF0IjoxNzA1NDcwOTUxLCJleHAiOjE3MDU0NzQ1NTF9.NqNP3giTQAttkFihy7gkhy-LdGm7IWopop7sD_OXehQ'


requestUrl :- 'https://hospital-api-58xl.onrender.com/doctors'
method :- GET
header :- 'Content-Type: application/json' 
 
   {   
      "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhdmlkb2N0b3IxIiwiaWF0IjoxNzA1NDcwOTUxLCJleHAiOjE3MDU0NzQ1NTF9.NqNP3giTQAttkFihy7gkhy-LdGm7IWopop7sD_OXehQ'"
   }

responseBody :- 
  [
    {
        "_id": "6566d3657029d44eb0433907",
        "username": "ravidoctor1",
        "password": "123",
        "__v": 0
    },
    {
        "_id": "6566d3f17029d44eb043390b",
        "username": "ravidoctor2",
        "password": "123",
        "__v": 0
    },
   .......
]

description :- 
   1. id is the unique user id
   2. username is the username of the doctor user
   3. password is the password of the doctor user


   

3. API :- registerDoctorUser
   Description :- The API registers the Doctor User. The api takes a username and password in the request and returns success when the api is successfully executed.
   
   curl --location --request POST 'https://hospital-api-58xl.onrender.com/doctors/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "akashdoctor10",
    "password": 1234
}'

requestUrl :- 'https://hospital-api-58xl.onrender.com/register'
method :- POST
header :- 'Content-Type: application/json' 
requestBody :- 
   {   
      "username": "akashdoctor10",
    "password": 1234
   }

responseBody :- 
registeration of doctor succesfully

II. patient :- 

1. API :- registerPatient
   Description :- The API registers a new patient using Doctors userToken . The api takes patient's username, mobile, age , status in the requestbody and in return success message when executed successfully.

    curl --location --request POST 'hospital-api-58xl.onrender.com/patients/register' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhdmlkb2N0b3IxIiwiaWF0IjoxNzA1NDcyMzEyLCJleHAiOjE3MDU0NzU5MTJ9.5yXBYMnrVQGmxc-vFZG4RWwpiZi4aFSk1mc2YfzldL8' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"akashpatient10",
    "phone":5678,
    "age":12,
    "status":"notdone"
    
}'

requestURL :- "hospital-api-58xl.onrender.com/patients/register"
headers :-
{
'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhdmlkb2N0b3IxIiwiaWF0IjoxNzA1NDcyMzEyLCJleHAiOjE3MDU0NzU5MTJ9.5yXBYMnrVQGmxc-vFZG4RWwpiZi4aFSk1mc2YfzldL8' 
}

requestBody :- 
{
    "name":"akashpatient10",
    "phone":5678,
    "age":12,
    "status":"notdone"
    
}'


responseBody :-
"registeration of patient succesfully"

2. API :- getAllPatientUser
   Description :- The API used to get all the patient user. Takes a doctor userToken in the header that returns list of patient registered with its reports if created.

    curl --location --request GET 'hospital-api-58xl.onrender.com/patients' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhdmlkb2N0b3IxIiwiaWF0IjoxNzA1NDcyMzEyLCJleHAiOjE3MDU0NzU5MTJ9.5yXBYMnrVQGmxc-vFZG4RWwpiZi4aFSk1mc2YfzldL8'

   requestUrl :- 'hospital-api-58xl.onrender.com/patients'
   method :- GET
   headers :-
   {
   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhdmlkb2N0b3IxIiwiaWF0IjoxNzA1NDcyMzEyLCJleHAiOjE3MDU0NzU5MTJ9.5yXBYMnrVQGmxc-vFZG4RWwpiZi4aFSk1mc2YfzldL8'
   }

   responseBody :-
   [
    {
        "report": {
            "vaccine_received": "YES",
            "doses_completed": 6,
            "last_dose_date": "2021-10-08",
            "covid_status": "NEGATIVE"
        },
        "_id": "6566d5887029d44eb0433918",
        "name": "ravipatient1",
        "phone": 1234567890,
        "age": 30,
        "__v": 0
    },
    {
        "_id": "65a7720af6fbadd4f8362d12",
        "name": "akashpatient10",
        "phone": 5678,
        "age": 12,
        "__v": 0
    }
]

3. API :- removePatientUser
   Description :- the API removes the patient user . Takes a Doctor userToken and patient Unique id and returns a success message on successfully execution.

   curl --location --request POST 'hospital-api-58xl.onrender.com/patients/remove/65a7720af6fbadd4f8362d12' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhdmlkb2N0b3IxIiwiaWF0IjoxNzA1NDcyMzEyLCJleHAiOjE3MDU0NzU5MTJ9.5yXBYMnrVQGmxc-vFZG4RWwpiZi4aFSk1mc2YfzldL8' \
--data-raw ''

   requestUrl :- 'hospital-api-58xl.onrender.com/patients/remove/65a7720af6fbadd4f8362d12'
   method :- POST
   headers :-
   {
      Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhdmlkb2N0b3IxIiwiaWF0IjoxNzA1NDcyMzEyLCJleHAiOjE3MDU0NzU5MTJ9.5yXBYMnrVQGmxc-vFZG4RWwpiZi4aFSk1mc2YfzldL8'
   }

   responseBody :-
      deleted successfully

4. API :- getPatientByStatus
   Description :-
   method:- GET
   request curl :-
   requestBody :-
   responseBody :-
6. API :- createPatientReport
   Description :-
   method :- POST
   request curl :-
   requestBody :-
   responseBody :-



   
8. https://hospital-api-58xl.onrender.com/patients (get)
9. https://hospital-api-58xl.onrender.com/patients/:id/create_report (post)
10. https://hospital-api-58xl.onrender.com/patients/:id/all_reports (post)
11. https://hospital-api-58xl.onrender.com/patients/remove/:id (post)

III. reports :-

10. https://hospital-api-58xl.onrender.com/reports/:status (get)
