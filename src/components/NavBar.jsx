import '../css/NavBar.css';
import { Link } from 'react-router-dom';
import { useMovieContext } from '../contexts/MovieContext';

function NavBar() {
    const { favourites } = useMovieContext().value;
    const favCount = favourites?.length || 0;

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/">MovieApp</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-links">Home</Link>
                <Link to="/favorites" className="nav-links">
                    Favorites {favCount > 0 ? `(${favCount})` : ''}
                </Link>
            </div>
        </nav>
    );
}

export default NavBar
