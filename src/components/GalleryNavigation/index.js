
import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';


function GalleryNavigation({ galleries }) {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                {galleries.map(gallery => (
                    <li key={gallery.id}>
                        <NavLink to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}



export default GalleryNavigation;
