This is a Movie Discovery Application built with React. It allows users to browse popular movies, search for specific titles, and manage a personal list of favorite movies. The application fetches real-time data from The Movie Database (TMDB) API .

Tech Stack
Frontend Framework : React (using Functional Components and Hooks).
Build Tool : Vite (for fast development and building).
Routing : React Router ( react-router-dom ) for handling client-side navigation between Home and Favorites.
State Management : Context API ( MovieContext.jsx ) for managing global state (the list of favorite movies) across different components.
API : Fetch API used to communicate with the TMDB endpoints ( api.js ).
Styling : Plain CSS (with separate files for components like Home.css , NavBar.css ).
Functionality
Home Page ( Home.jsx ) :

Popular Movies : Automatically fetches and displays a grid of currently popular movies upon loading.
Search : Provides a search bar where users can type a query. The app fetches matching movies from the API and updates the grid dynamically.
Loading & Error States : Handles loading indicators while data is being fetched and displays error messages if the API call fails.
Favorites Management ( Favorites.jsx ) :

Add/Remove : Users can "like" a movie card to add it to their favorites list. Clicking it again removes it.
Persistence : Favorites are saved to the browser's Local Storage ( MovieContext.jsx ), ensuring they remain even after the page is refreshed.
Empty State : Shows a friendly message if the user hasn't added any favorites yet.
Navigation ( NavBar.jsx ) :

Simple navigation between the "Home" view and the "Favorites" view.
Displays a live count of the number of favorite movies.
Purpose
The core purpose of this project is to demonstrate the fundamental flow of a React application:

Component Structure : How to break down a UI into reusable parts ( MovieCard , NavBar ).
Data Fetching : How to use useEffect to trigger side effects (like API calls) and async/await with fetch to get data from an external server ( Home.jsx ).
State Management :
Local State : Using useState for things like the search query, loading status, and the list of movies.
Global State : Using Context to share the "Favorites" list between the Home page (where you add them) and the Favorites page (where you view them).
User Interaction : Handling events like form submissions (search) and button clicks (toggling favorites).
Persistence : Learning how to interact with localStorage to keep data between sessions.
