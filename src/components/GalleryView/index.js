
// 1) The last component you will create is the <ArtDescription> component. Set up the component file in the components folder just as you did for the other components you created.
// (2) This component will be rendered in the GalleryView component at the /galleries/:galleryId/art/:artId route. It will provide details on the artwork at the specified :artId path parameter. You should also pass the gallery down as a prop to <ArtDescription>.

import React from 'react';
import { useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile/ArtImageTile';




const GalleryView = ({ galleries }) => {
    const { galleryId } = useParams();
    const gallery = galleries.find(item => item.id === +galleryId);
    const artworks = gallery.objects;
    let { name, theme, labeltext } = gallery;

    return (
        <div className='page-wrapper'>
            <h1>{theme.replaceAll('_', ' ')}</h1>
            <h2>{name.replaceAll('_', ' ')}</h2>
            <p>
                {labeltext
                    .replaceAll(';', '.')
                }
            </p>

            {artworks.map(item => (
                <ArtImageTile key={item.id} art={item} galleryId={+galleryId} />
            ))}
        </div>
    );
}




export default GalleryView;
