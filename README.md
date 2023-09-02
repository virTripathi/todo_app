Angular Two-Way Data Binding Demo
This repository contains an Angular application that demonstrates the concept of two-way data binding in Angular. The application consists of five components: About, Search, Todos, TodoItem, and AddTodo. This README will guide you through the process of pulling the repository, installing dependencies, and understanding how two-way data binding is implemented in each component.

Getting Started
Follow these steps to get the Angular Two-Way Data Binding Demo up and running on your local machine.

Prerequisites
Make sure you have the following tools installed:

Node.js (with npm)
Angular CLI (npm install -g @angular/cli)
Clone the Repository : 'git clone https://github.com/yourusername/angular-two-way-data-binding-demo.git'
cd angular-two-way-data-binding-demo
Install Dependencies
Run the following command to install the project dependencies: 'npm install'

Run the Application
Start the Angular development server with the following command: 'ng serve'

Open your web browser and navigate to http://localhost:4200/. You should see the application running.

Application Structure
The application is structured with five components:

About: The About component is a simple static page describing the application.

Search: The Search component demonstrates two-way data binding using an input field and a corresponding display of the search term.

Todos: The Todos component displays a list of todos and demonstrates two-way data binding for marking todos as completed.

TodoItem: The TodoItem component represents an individual todo item and allows you to mark it as completed.

AddTodo: The AddTodo component provides a form to add new todo items to the list.

Two-Way Data Binding Implementation
Here's a brief explanation of how two-way data binding is implemented in each component:

Search Component
In the search.component.html file, we use the [(ngModel)] directive to bind the input field's value to the searchTerm property in the component class. This enables two-way data binding, allowing changes in the input field to automatically update the searchTerm property.

Todos and TodoItem Components
In the todo.component.html file, the list of todos is generated using an *ngFor loop. Each todo item's checkbox uses [(ngModel)] to bind to the completed property of the corresponding todo. This enables two-way data binding, allowing you to toggle the completion status.

AddTodo Component
In the add-todo.component.html file, the form input fields for the new todo item are bound to the newTodo object using [(ngModel)]. This allows you to enter values into the form fields and submit them, adding a new todo item to the list.

Conclusion
This Angular application demonstrates the power of two-way data binding, making it easy to keep the UI and underlying data synchronized. Feel free to explore the code and experiment with the components to gain a better understanding of how two-way data binding works in Angular. Enjoy coding!
