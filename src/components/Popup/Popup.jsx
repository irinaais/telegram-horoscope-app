import './Popup.css';
import { useEffect, useRef } from 'react';

export default function Popup({ isOpen, onClose, content }) {
  const startX = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchend', handleTouchEnd);
    } else {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    }
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isOpen]);

  function handleTouchStart(evt) {
    startX.current = evt.touches[0].clientX;
  }

  function handleTouchEnd(evt) {
    if (startX.current !== null) {
      const endX = evt.changedTouches[0].clientX;
      if (startX.current - endX > 100) {
        // Свайп влево, ничего не делаем
      } else if (endX - startX.current > 100) {
        // Свайп вправо, закрываем popup
        onClose();
      }
    }
  }

  function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) onClose();
  }

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} onClick={handleOverlayClick}>
      <div className="popup__view-card">
        <p>{content}</p>
      </div>
    </div>
  );
}

