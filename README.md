# SpaceX Capsule Explorer

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

### Backend

1. **Setting Up the PHP Backend:**
   Navigate to the backend directory.

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

- The API pagination feature is currently not working as expected. The pagination offset and limits is not working as expected, return wrong number of capsules
