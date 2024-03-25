
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

1. **Clone the repository:**

```bash
git clone https://github.com/prashant404/RMS.git
```

2. **Navigate to the project directory:**

```bash
cd result-management-app
```

3. **Install the required packages:**

```bash
npm install
```

4. **Configure the Database:**
   - Open `index.js` and provide your MongoDB connection string.

5. **Start the server:**

```bash
npm start
```

The application will be accessible at `http://localhost:3000`.

## Teacher Login

- Username: teacher
- Password: teacher1

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Log in using the teacher's credentials provided above.
3. Perform CRUD operations on student records and their marks.
4. Students can log in using their own credentials and view their marks.

## Contributing

Contributions are welcome! Feel free to submit pull requests or report issues.


Made by Prashant Kumar
