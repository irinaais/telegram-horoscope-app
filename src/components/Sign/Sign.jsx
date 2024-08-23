import './Sign.css';
import { useEffect, useState } from 'react';
import { getHoroscope } from '../../app-component/network/Api';
import Popup from '../Popup/Popup';

export default function Sign(props) {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [horoscopeText, setHoroscopeText] = useState('');

  useEffect(() => {
    if (popupIsOpen && window.Telegram && window.Telegram.WebApp) {
      // Показываем кнопку "Назад" в Telegram Miniapp
      window.Telegram.WebApp.BackButton.show();
      window.Telegram.WebApp.BackButton.onClick(() => {
        handleClose();
      });
    } else if (window.Telegram && window.Telegram.WebApp) {
      // Скрываем кнопку "Назад" при закрытии Popup
      window.Telegram.WebApp.BackButton.hide();
    }
  }, [popupIsOpen]);

  const handleClick = async () => {
    try {
      const horoscopeInfo = await getHoroscope(props.sign.title, props.language, 'today');
      const horoscopeText = horoscopeInfo.horoscope;
      setHoroscopeText(horoscopeText);
      setPopupIsOpen(true);
    } catch (error) {
      console.error('Error fetching horoscope:', error);
    }
  };

  const handleClose = () => {
    setPopupIsOpen(false);
  };

  return (
    <>
      <section className='sign' onClick={handleClick}>
        <p className='sign__name'>{props.sign.name}</p>
        <p>{props.sign.period}</p>
        <p>{props.sign.icon}</p>
      </section>

      <Popup
        isOpen={popupIsOpen}
        onClose={handleClose}
        content={horoscopeText}
      />
    </>
  );
}
