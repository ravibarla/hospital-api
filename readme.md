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

technology used :-

1. node js
2. express js
3. ejs template engine
4. css
5. bootstrap
6. html 
7. mongodb
8. jwt

deployment platform :-

1. Render


api :-

I.doctor :-
1. https://hospital-api-58xl.onrender.com/doctors (get)  
2. https://hospital-api-58xl.onrender.com/doctors/register (post)
3. https://hospital-api-58xl.onrender.com/doctors/remove/:id (post)
5. https://hospital-api-58xl.onrender.com/doctors/login (post)

II. patient
6. https://hospital-api-58xl.onrender.com/patients (get)
7. https://hospital-api-58xl.onrender.com/patients/:id/create_report (post)
8. https://hospital-api-58xl.onrender.com/patients/:id/all_reports (post)
9. https://hospital-api-58xl.onrender.com/patients/remove/:id (post)

III. reports
10. https://hospital-api-58xl.onrender.com/reports/:status (get)
