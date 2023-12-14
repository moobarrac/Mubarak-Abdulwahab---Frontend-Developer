# SpaceX Capsule Explorer

SpaceX Capsule Explorer is an interactive web application that allows users to explore information about SpaceX's various capsules. This application utilizes the SpaceX API for data retrieval and provides functionalities like filtering, detailed views, and more.

## Video Walkthrough

For a detailed demonstration of the app's functionality and features, check out this [video walkthrough](https://www.loom.com/share/f91173576659455e84636327323167b6?sid=c1ddaad1-bd5d-43ca-ba58-7e05b6c04b62).

## Installation and Setup

### Frontend

1. **Install NPM Packages:**
   Navigate to your repository and run:

   ```bash
   npm install
   ```

2. **Run the Frontend Application:**
   ```bash
   npm start
   ```

### Testing

1. **Run test cases:**
   Navigate to your repository and run the test command:

   ```bash
   npm test
   ```

### Backend

1. **Setting Up the PHP Backend:**
   Navigate to the app directory.

2. **Run the PHP Server:**
   ```bash
   php -S localhost:8000 index.php
   ```

## Usage

- On the main page, you can view a list of SpaceX capsules.
- Use the search form to filter capsules based on status, original launch date, and type.
- Click on a capsule to view more detailed information in a pop-up modal.
- Navigate through the list using the pagination controls.

## Known Issues

- The API pagination feature is currently not working as expected. The pagination offset and limit is not working as expected, return wrong number of capsules
