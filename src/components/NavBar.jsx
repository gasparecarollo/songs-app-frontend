import { Link } from "react-router-dom";
import topLogo from "/"

function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/songs">Songs</Link>
            </h1>
            <button>
                <Link to="/songs/new">Add Song to Tuner App </Link>
            </button >
        </nav >
    );
}

export default NavBar;