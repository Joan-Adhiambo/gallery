# Gallery Web Application

A dynamic and interactive image gallery built with Node.js, Express, and EJS. The application allows users to view, search, and interact with images, explore detailed information, and filter content based on categories and locations. It is designed for scalability, responsiveness, and easy deployment to cloud platforms like Heroku or Render.

# Features

Browse and explore all images in a clean, responsive gallery layout
Click images for a modal preview with description and metadata
Search and filter images by category or location
Fully responsive design for mobile, tablet, and desktop
Integration with MongoDB or MongoDB Atlas for scalable data storage
CI/CD ready with Jenkins or GitHub Actions

| Layer               | Technology                   |
| ------------------- | ---------------------------- |
| **Backend**         | Node.js, Express.js          |
| **Frontend**        | EJS, HTML5, CSS3, JavaScript |
| **Database**        | MongoDB / MongoDB Atlas      |
| **Version Control** | Git & GitHub                 |
| **Deployment**      | Heroku, Render               |
| **Testing**         | Mocha & Chai                 |


# 🚀 Getting Started
Prerequisites

Node.js v14+

npm v6+

MongoDB (local or cloud via Atlas)

# Installation
# Clone repository
git clone https://github.com/Joan-Adhiambo/gallery.git
cd gallery

# Install dependencies
npm install

Configuration
PORT=5000
MONGO_URI=<your_mongo_connection_string>

Running Locally
npm start
Open your browser at http://localhost:5000


# 📂 Project Structure
gallery/
├── models/        # Mongoose schemas & data models
├── routes/        # Express routes
├── views/         # EJS templates
├── public/        # CSS, JS, images
├── test/          # Mocha & Chai tests
├── server.js      # App entry point
├── package.json   # Dependencies & scripts
├── Procfile       # Heroku deployment
└── Jenkinsfile    # CI/CD pipeline config



# 🧪 Running Tests
The project uses Mocha and Chai for testing. To run tests:
npm test

Example test output:

Photos
  ✓ should list ALL photos on / GET


# 🌐 Deployment
Render
Connect GitHub repository
Create a Web Service
Add environment variables (MONGO_URI)
Automatic deployment on push to master

# Heroku

heroku login
heroku create gallery-app
git push heroku main
heroku config:set MONGO_URI=<your_mongo_connection_string>
heroku config:set PORT=5000
heroku open


# 🤝 Contributing

contributions! Follow these steps:

Fork the repository
Create a feature branch:
git checkout -b feature-name
Make your changes and commit:
git commit -m "Add new feature"
Push to your branch:
git push origin feature-name
Open a Pull Request on GitHub