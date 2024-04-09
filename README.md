# Hackathon-jsonPlaceholder

Brief description of the project.

## Overview

This project is a React web application utilizing the JSONPlaceholder API for demonstration purposes. It includes the following features:

- Dynamic sidebar for navigation
- List of posts with comment functionality
- Photo gallery from albums
- Todo list with interactive checkboxes

## Installation

To get this project up and running on your local machine, follow these steps:

1. Clone this repository.
2. Navigate to the project directory and install the dependencies: npm i

3. Start the development server: npm start


4. Open `http://localhost:3000` in your browser to view the application.

## Components

### `Sidebar.js`

A sidebar component that toggles visibility and highlights the current navigation item based on the route.

### `Comments.js`

Displays comments for a given post ID, fetching data from the JSONPlaceholder API.

### `Gallery.js`

A gallery component that displays photos fetched from the JSONPlaceholder API, limited to 6 items.

### `Posts.js`

Lists posts and allows users to view comments and like or share posts. Clicking on a post reveals its comments.

### `Todo.js`

A todo list component displaying todos with checkboxes to mark completion.

## Styles

Each component has an associated CSS file in the `styles` directory, ensuring modularity and ease of styling.

## API Reference

This project uses the JSONPlaceholder API for demonstration purposes, providing fake data for posts, comments, albums, photos, todos, and users.
