# Distance Matrix Tracker

A simple React application that fetches and displays distance information between two locations using the Distance Matrix API.

## Features

- Input fields for origin and destination locations
- Fetch distance and duration data
- Display results or error messages

## Requirements

- Node.js
- npm or yarn

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kappalasaimohith/LocationTrack.git
   cd LocationTrack
   ```

2. **Install dependencies**:
   Navigate to the `distancetracking` folder and install dependencies:
   ```bash
   cd distancetracking
   npm install
   ```

3. **Obtain an API key**:
   - Sign up for the [Distance Matrix API](https://distancematrix.ai/distance-matrix-api) and get your API key.
   - Replace `const apiKey = '';` in `index.js` with your actual API key.

4. **Start the application**:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:8080` to use the app.

## Usage

- Enter an origin and a destination in the respective input fields.
- Click the "Get Distance" button to fetch and display the distance and duration.
