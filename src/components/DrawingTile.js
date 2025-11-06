import React from 'react';
import './DrawingTile.css';

const DrawingTile = ({ drawing, onClick }) => {
  const { id, date, size, src } = drawing;

  return (
    <div
      className={`drawing-tile size-${size}`}
      onClick={onClick}
    >
      <div className="tile-header">
        <span className="tile-date">{date}</span>
        <span className="tile-id">ID {id}</span>
      </div>
      <div className="tile-image-container">
        <img src={src} alt={`Drawing ${id}`} className="tile-image" />
      </div>
    </div>
  );
};

export default DrawingTile;
