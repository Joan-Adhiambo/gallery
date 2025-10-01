
Gallery Web Application

A dynamic, interactive image gallery built with Node.js, Express, and EJS. Users can view, search, and interact with images, see detailed information, and filter based on categories and locations. Designed for scalability and easy deployment to platforms like Heroku or Render.


Technologies Used

Backend: Node.js, Express.js

Frontend: EJS, HTML5, CSS3, JavaScript

Database: MongoDB / MongoDB Atlas (cloud-hosted option)

Version Control: Git & GitHub

Deployment: Heroku, Render

Testing: Mocha & Chai

Getting Started
Prerequisites

Make sure you have the following installed:

Node.js
 v14 or higher

npm
 v6 or higher

MongoDB
 (local or Atlas)

Installation Steps

Clone the Repository

git clone 
cd gallery


Install Dependencies

npm install


Configure Environment Variables

Create a .env file at the root directory and add:

PORT=5000
MONGO_URI=<your_mongo_connection_string>


Run the Application Locally

npm start


Open your browser at http://localhost:5000

Project Structure
gallery/
├── models/         # Mongoose schemas and data models
├── routes/         # Express routes
├── views/          # EJS templates
├── public/         # Static assets: CSS, JS, images
├── test/           # Mocha & Chai tests
├── server.js       # Application entry point
├── package.json    # Dependencies and scripts
├── package-lock.json
├── Procfile        # Deployment for Heroku
└── Jenkinsfile     # CI/CD pipeline configuration

 Running Tests

The project uses Mocha and Chai for testing. To run tests:

npm test


Example test output:

Photos
  ✓ should list ALL photos on / GET

Deployment

Render

Connect your GitHub repo to Render.

Create a Web Service.

Set environment variables (MONGO_URI).

Deploy automatically on push to master branch.


Contributing
Fork the repository.

Create a feature branch: git checkout -b feature-name

Make your changes and commit: git commit -m "Add new feature"

Push to your branch: git push origin feature-name

Open a Pull Request on GitHub.