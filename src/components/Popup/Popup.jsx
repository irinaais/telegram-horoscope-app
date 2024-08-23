import './Popup.css';

export default function Popup({ isOpen, onClose, content }) {
  function handleOverlayClick(evt) {
    if (evt.target===evt.currentTarget) {onClose()}
  }

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} onClick={handleOverlayClick}>
      <div className="popup__view-card">
        <p>{content}</p>
      </div>
    </div>
  );
}
