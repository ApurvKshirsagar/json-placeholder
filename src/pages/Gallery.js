import React, { useEffect, useState } from 'react';
import '../styles/Gallery.css';

function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=6')
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div className='gallery'>
      {photos.map((photo) => (
        <div key={photo.id} className='photo'>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
