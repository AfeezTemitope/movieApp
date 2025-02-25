import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <nav className="bg-purple-500 text-white flex justify-center items-center sticky top-0 w-full h-16 px-4">
            <FontAwesomeIcon icon={faFilm} className="h-8 mr-2" />
            <span className="text-lg">BadMovieDB</span>
        </nav>
    );
};

export default NavBar;
