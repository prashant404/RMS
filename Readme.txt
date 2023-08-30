# Result Management Application

The Result Management Application is a web-based application built using HTML, CSS, JavaScript, MongoDB, Express.js, and Node.js. It allows teachers to perform CRUD operations on student records and their marks, and students can view their respective marks.

## Features

- Teacher can:
  - Create, Read, Update, and Delete student records
  - Add, edit, and delete marks for each student
- Students can:
  - View their marks
- Teacher login with password "teacher1"

## Prerequisites

- Node.js and npm (Node Package Manager)
- MongoDB (Make sure MongoDB is running on your machine or provide a connection string)

## Setup
1.Navigate to the project directory:

~~ cd result-management-app
2.Install the required packages:

~~ npm install

3.Configure the Database:

Open config.js and provide your MongoDB connection string.

4.Start the server:
~~ npm start
The application will be accessible at http://localhost:3000.

Teacher Login
Username: teacher
Password: teacher1


Usage
Open your web browser and go to http://localhost:3000.
Log in using the teacher's credentials provided above.
Perform CRUD operations on student records and their marks.
Students can log in using their own credentials and view their marks.