
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ArtDescription = ({ galleries }) => {
    const { galleryId, artId } = useParams();
    const gallery = galleries.find(item => item.id === +galleryId);
    const art = gallery.objects.find(item => item.id === +artId);
    let description = art.description;
    if (description === null) {
        description = "No description available.";
    }
    return (
        <div className="art-description">
            <h1>{art.title}</h1>
            <p>{art.description}</p>
            <img src={art.primaryimageurl} alt={art.title} />
            <Link to={`/galleries/${galleryId}`}>
                <p>Back to {gallery.theme.replaceAll('_', ' ')}</p>
            </Link>
            </div>
    );
}


export default ArtDescription;
