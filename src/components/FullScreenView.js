import React, { useEffect } from 'react';
import './FullScreenView.css';

const FullScreenView = ({ drawing, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!drawing) return null;

  return (
    <div className="fullscreen-overlay" onClick={onClose}>
      <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="fullscreen-image-wrapper">
          <img src={drawing.src} alt={`Drawing ${drawing.id}`} className="fullscreen-image" />
        </div>
        <div className="fullscreen-info">
          <span className="fullscreen-date">{drawing.date}</span>
          <span className="fullscreen-id">ID {drawing.id}</span>
        </div>
      </div>
    </div>
  );
};

export default FullScreenView;
