import './Sign.css';
import { useState } from 'react';
import { getHoroscope } from '../../app-component/network/Api';
import Popup from '../Popup/Popup';

export default function Sign(props) {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [horoscopeText, setHoroscopeText] = useState('');

  const handleClick = async () => {
    try {
      const horoscopeInfo = await getHoroscope(props.sign.title, 'original', 'today');
      const horoscopeText = horoscopeInfo.horoscope;
      setHoroscopeText(horoscopeText);
      setPopupIsOpen(true);
    } catch (error) {
      console.error('Error fetching horoscope:', error);
    }
  };

  const handleClose = (e) => {
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
