# Movie App Documentation

## Overview

The Movie App is a React-based application for searching, viewing, and managing movies. Users can search for movies using the OMDB API, view detailed information about a selected movie, and maintain a personalized watchlist with ratings.

## Features

1. **Search Movies**: Search for movies using the OMDB API.
2. **View Movie Details**: Fetch and display detailed information about a selected movie.
3. **Personal Watchlist**: Add movies to a watchlist, rate them, and view statistics about watched movies.
4. **Interactive UI**: Toggle components, dynamic search input focusing, and responsive layout.

## Components

### 1. `App`

The main component that coordinates the application flow and state management.

- **State Management**:
  - `query`: Stores the current search query.
  - `selectedId`: Tracks the currently selected movie's ID.
  - `watched`: Array of watched movies, stored in local storage.
- **Key Functions**:
  - `handleSelectMovie`: Selects or deselects a movie.
  - `handleAddWatched`: Adds a movie to the watchlist.
  - `handleDeleteWatched`: Removes a movie from the watchlist.

### 2. `NavBar`

- Includes the app logo, and search bar, and displays the number of search results.
- **Subcomponents**:
  - `Logo`: Displays the app's branding.
  - `Search`: Search input with focus toggling using the `useKey` hook.
  - `NumResults`: Shows the count of fetched movies.

### 3. `Main`

- Wrapper component to organize the app’s primary layout.

### 4. `Box`

- Toggles visibility of its children using a button.

### 5. `MovieList`

- Displays a list of movies fetched from the OMDB API.
- **Subcomponent**:
  - `Movie`: Renders individual movie details and triggers selection.

### 6. `MovieDetails`

- Fetches and displays detailed information about a selected movie.
- **Dynamic Features**:
  - Automatically updates the document title with the movie's name.
  - Allows the user to rate a movie and add it to the watchlist.

### 7. `WatchedSummary`

- Displays statistics about watched movies, including average IMDb rating, user rating, and runtime.

### 8. `WatchedMovieList`

- Lists all watched movies and allows deletion.
- **Subcomponent**:
  - `WatchedMovie`: Renders individual watched movie details.

### 9. `Loader`

- A spinner component displayed during data fetching.

### 10. `ErrorMessage`

- Renders error messages when data fetching fails.

## Custom Hooks

### 1. `useMovie`

- Fetches movies based on the search query.
- Handles loading state and errors.

### 2. `useLocalStorageState`

- Synchronizes state with local storage for persistence.

### 3. `useKey`

- Listens for keypress events and executes provided callback functions.

## Utilities

### `average`

- Calculates the average of an array of numbers.

## API Integration

- **OMDB API**:
  - Base URL: `https://www.omdbapi.com/`
  - API Key: `URAPI`
  - Fetches movies and detailed information based on the IMDb ID.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/movie-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd movie-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Search for movies by typing in the search bar.
2. Click on a movie to view its details.
3. Add movies to the watchlist and rate them.
4. View statistics of your watched movies.
5. Remove movies from the watchlist if desired.

## Fallback Features

- Displays a default image if the movie poster is unavailable.
- Prevents redundant ratings by checking if the movie is already watched.

## Future Enhancements

1. Add user authentication to save watchlists across devices.
2. Implement pagination for search results.
3. Improve styling for a more polished UI.

## License

This project is licensed under the MIT License.

