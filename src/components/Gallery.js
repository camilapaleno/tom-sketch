import React, { useState } from 'react';
import DrawingTile from './DrawingTile';
import FullScreenView from './FullScreenView';
import { drawings } from '../data/drawings';
import './Gallery.css';

const Gallery = () => {
  const [selectedDrawing, setSelectedDrawing] = useState(null);

  const handleTileClick = (drawing) => {
    setSelectedDrawing(drawing);
  };

  const handleClose = () => {
    setSelectedDrawing(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {drawings.map((drawing) => (
          <DrawingTile
            key={drawing.id}
            drawing={drawing}
            onClick={() => handleTileClick(drawing)}
          />
        ))}
      </div>
      {selectedDrawing && (
        <FullScreenView drawing={selectedDrawing} onClose={handleClose} />
      )}
    </div>
  );
};

export default Gallery;
