# React + Vite Project

This template provides a minimal setup for a React application utilizing Vite for an enhanced development experience, including Hot Module Replacement (HMR) and ESLint for code quality. This application showcases how to fetch and manipulate data from a RESTful API in a single-page application (SPA) architecture, dynamically rewriting the current page without reloading new pages from the server. Client-side routing is managed with React Router, and the UI benefits from React Bootstrap components for styling and functionality.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 
- npm 

## Installation and Setup

To set up and run this project locally, follow these steps:

1. **Clone the repository:**
   git clone https://example.com/your-project.git
   cd your-project
   
2. **Install Vite and create a new project (if starting from scratch):**
npm create vite@latest my-project --template react
cd my-project

3. **Starting the Server**
Run the following commands to start up your server and install the appropriate libraries
npm install
npm run dev
npm install axios react-bootstrap react-router-dom bootstrap


**Plugins**
The project uses two official Vite plugins for React to enable Fast Refresh:

@vitejs/plugin-react (Babel-based)
@vitejs/plugin-react-swc (SWC-based)

**Running Tests with Cypress**
To include end-to-end testing in your project with Cypress,

npm install cypress 
npm run cy:open (to open the Cypress GUI)
npx cypress run --spec "<test_file_name>" (to run a specific test)




