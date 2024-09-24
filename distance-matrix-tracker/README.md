Sure! Here’s a clearer version that specifies the directory structure and where to place the `.env` file:

# Distance Matrix Tracker

A simple React application that fetches and displays distance information between two locations using the Distance Matrix API.

## Features

- Input fields for entering origin and destination locations
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

2. **Install dependencies for both projects**:
   Navigate to the `distance-matrix-tracker` folder and install dependencies:
   ```bash
   cd distance-matrix-tracker
   npm install
   ```

3. **Obtain an API key**:
   - Sign up for the [Distance Matrix API](https://distancematrix.ai/distance-matrix-api) to get your API key.
   - Create a `.env` file inside the `distance-matrix-tracker` directory and add your API key:
     ```
     VITE_API_KEY = "your_distance_matrix_api_key"
     ```

4. **Start the application**:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` to use the app.

## Usage

- Enter the origin and destination in the respective input fields.
- Click the "Get Distance" button to fetch and display the distance and duration.
