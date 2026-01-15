This is a User Registration System built using Node.js, Express, MongoDB, and MVC architecture. It features a simple registration form where users can submit their name, email, and password, with all passwords securely hashed using bcrypt before being stored in MongoDB. The project follows MVC design, separating Models (database schemas), Controllers (business logic), and Views (HTML/CSS), providing a clean and maintainable code structure. It includes form validation, error handling, and redirects users to a success page after successful registration. The backend serves static files via Express and demonstrates secure handling of user data. To use this project, clone the repository, install dependencies with npm install, start your MongoDB server, and run the backend using node src/app.js. Access the app at http://localhost:3000
 to register users. This project is ideal for learning full-stack development, secure authentication, and scalable MVC architecture.

✅ Features

User registration with name, email, and password

Password hashing with bcrypt

MVC architecture for clean separation of concerns

Form validation and error handling

Redirect to success page after registration

Static file serving via Express

🛠 Tech Stack

Backend: Node.js, Express

Database: MongoDB, Mongoose

Security: bcrypt

Frontend: HTML, CSS

Architecture: MVC

⚙️ Installation

Clone the repo:

git clone https://github.com/your-username/user-registration.git
cd user-registration


Install dependencies:

npm install


Start MongoDB server:

mongod


Start the app:

node src/app.js


Open http://localhost:3000
 in your browser.
