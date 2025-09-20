# Gallery

A simple image gallery web application.  
This repository is a fork of [jonnygovish/gallery](https://github.com/jonnygovish/gallery).  

---

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

---

## About

Gallery is a web application that allows users to browse images in a clean, organized view. It provides routes to display images, uses a server backend, and has front‑end views for displaying content.  

---

## Features

- Display a gallery of images  
- Clean UI / Views via templates  
- Static assets served (CSS, frontend JS, images)  
- Backend routing via server.js  
- Configuration via `_config.js`  

---

## Tech Stack

- **Languages**: HTML, CSS, JavaScript  
- **Backend**: Node.js  
- **Server**: Express (if that is what server.js uses)  
- **Templating/views**: (adjust if using EJS, Pug, Handlebars, etc.)  
- **Configuration**: `_config.js`  
- **Package management**: npm  

---

## Getting Started

These instructions will get you a copy of the project running on your local machine.

### Prerequisites

Make sure you have installed:

- Node.js (version ≥ …)  
- npm  

### Installation

```bash
# Clone the repository
git clone https://github.com/Joan‑Adhiambo/gallery.git

# Move into project directory
cd gallery

# Install dependencies
npm install


Configuration

Review or create _config.js to suit your environment (e.g. port, any paths).

Folder Structure
gallery/
├── models/            # Data models (if any)
├── public/            # Static files: CSS, JS, images
├── routes/            # Route definitions
├── views/             # HTML / template views
├── server.js          # Entry point to start server
├── _config.js         # Configuration settings
├── package.json       # Project metadata & dependencies
└── package-lock.json  # Exact dependency versions

Getting Started
1. Clone the repository
git clone <your-repo-url>
cd <project-folder>

2. Create a new branch:
git checkout -b feature/YourFeatureName

3.Make Your changes.
4.Commit your changes
git commit -m "Add some new feature"

5.Push your branch 
git push origin feature/YourFeatureName

6. Create a pull request.

License

This project is open source.
