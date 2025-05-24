import React, { useState } from 'react';

const Gallery = () => {
  const images = ['kohli.jpeg', 'rohit.jpeg', 'shikhar.jpeg', 'shubam.jpeg'];
  const [selected, setSelected] = useState(null);


  
    return (
      <div>
        <h1>Gallery</h1>
        <p>Welcome to the gallery!</p>
      </div>
    )
  }


export default Gallery
