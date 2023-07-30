# Kanban Board - React with Recoil State Management

This project is a Kanban board application built using React and Recoil for state management. The Kanban board allows users to manage tasks efficiently and visualize work progress. Below are the features implemented:

- Create multiple lists to represent different stages of tasks.
- Add tasks to any list with a title, description, and due date.
- Implement drag-and-drop functionality to move tasks between lists and update their status.
- Allow users to edit existing tasks to modify their title, description, or due date.
- Provide the option to delete tasks from any list.
- Optional: Implement a feature to assign users to tasks.
- Optional: Add a filter to view tasks based on their assignment.

## Live Demo

The application is deployed on Netlify and can be accessed [here](https://kanban-board-react-recoil.netlify.app/).

## Getting Started

Follow the steps below to run the application locally on your machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/Shahriar-Shakil/kanban-board-react-recoil
   ```

2. Change into the project directory:

### `cd kanban-board-react-recoil`

3. Install the dependencies:

### `npm install`

## Usage

1. Run the development server:

### `npm start`

2. Open your browser and go to http://localhost:3000 to access the Kanban board app.

## State Management with Recoil

The application uses Recoil for state management instead of Redux. Recoil is a state management library developed by Facebook specifically for React applications. It offers a simple and intuitive way to manage application state without the need for complex setup and boilerplate code.

In this application, we manage the state of users, projects, and filters using Recoil atoms and selectors. The Recoil state is also persisted to local storage using the recoil-persist package to maintain state between page reloads.

## Users and Projects

The application allows users to create, edit, and delete projects on the Kanban board. Users can also be assigned to projects.
