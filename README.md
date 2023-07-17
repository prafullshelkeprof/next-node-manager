Certainly! Here's an updated README file that includes the information you requested:

# Node Manager

Node Manager is a web application built with Next.js and FastAPI that allows users to manage and visualize a node-based data structure. It provides functionality to add new nodes to existing nodes, change the parent of existing nodes, and display the nodes using a tree visualization. The backend server is implemented in Python and the data is stored in a static JSON file.

## Features

Implemented Features:

- Add new nodes to existing nodes in the data structure.
- Change the parent of existing nodes in the data structure.
- Display the nodes using a tree visualization for an intuitive and interactive user experience.
- Click on a node to view detailed information, including node ID, name, height in the tree, and parent details.

Future Features:

- Delete nodes from the data structure.
- Support for localization of text to provide multilingual support.
- Optimize the app for mobile view for a seamless user experience on mobile devices.

## Technologies Used

- Frontend: Next.js, React, HTML, CSS
- Backend: Python, FastAPI
- Data Storage: Static JSON file

## Installation

1. Clone the backend repository:

   ```bash
   git clone https://github.com/prafullshelkeprof/py-node-manager
   ```

2. Install dependencies for the backend:

   ```bash
   cd py-node-manager
   pip install -r requirements.txt
   ```

3. Start the backend server:

   ```bash
   uvicorn main:app --port 8000 --reload
   ```

4. Clone the frontend repository:

   ```bash
   git clone https://github.com/prafullshelkeprof/next-node-manager
   ```

5. Install dependencies for the frontend:

   ```bash
   cd next-node-manager
   yarn install
   ```

6. Start the frontend development server:

   ```bash
   yarn dev
   ```

7. Open the web application in your browser:

   ```
   http://localhost:3000
   ```

   Note: Ensure that the backend server is running on `localhost:8000`.

## Usage

1. Add a New Node:
   - Select an existing node in the data structure.
   - Provide the details of the new node, including name, node type, and any additional properties.
   - Click the "Add Child Node" button to add the new node to the selected existing node.

2. Change Parent of an Existing Node:
   - Select the node whose parent you want to change.
   - Specify the ID or name of the new parent node.
   - Click the "Change Parent" button to update the parent of the selected node.

3. Display Nodes:
   - The nodes are displayed using a tree visualization, providing a clear representation of the node structure and relationships.

4. View Node Details:
   - Click on a node in the tree to view detailed information about the node.
   - The node details include the node ID, name, height in the tree, and parent details.

## Building and Running the Application

### Building the Frontend

To build the frontend application for production, you can use the following command:

```bash
yarn build
```

This command will generate an optimized and minified version of the frontend code in the `build` directory. The resulting files can be deployed to a web server or used for production deployment.

### Running the Production Build

To run the frontend application using the production build, you can use the following command:

```bash
yarn start
```

This command will start a server that serves the production build of the frontend application. You can access the application by visiting the provided URL in your browser.

Please note that you need to build the frontend using `yarn build` before running the production build.

## Committing Changes

To commit changes to the repository, you can use the following command:

```bash
yarn commit
```

This command will prompt you to provide a commit message and automatically create a commit. It uses conventional commit messages to follow a standardized format for commits. Before running `yarn commit`, make sure to stage your changes using `git add` as usual.
