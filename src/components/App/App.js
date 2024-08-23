import './App.css';
import {
  EN,
  ORIGINAL,
  RU,
  SWITCH_TO_EN,
  SWITCH_TO_RU,
  TRANSLATED,
  zodiacSignsEN,
  zodiacSignsRU
} from '../../utils/constants';
import Sign from '../Sign/Sign';
import { useEffect, useState } from 'react';

function App() {
  const [language, setLanguage] = useState(RU);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const userLangCode = window.Telegram.WebApp.initDataUnsafe.user.language_code;
      const initialLanguage = userLangCode === RU ? RU : EN;
      setLanguage(initialLanguage);
    }
  }, []);

  const listOfHoroscope= language === RU ? zodiacSignsRU : zodiacSignsEN;
  const userLanguage = language === RU ? ORIGINAL : TRANSLATED;

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === RU ? EN : RU));
  };

  return (
    <main className='main'>
      <button className='language-toggle' onClick={toggleLanguage}>
        {language === RU ? SWITCH_TO_EN : SWITCH_TO_RU}
      </button>
      <div className='signs__container'>
        {listOfHoroscope.map((sign, index) => {
          return <Sign
            key={index}
            sign={sign}
            language={userLanguage}
          />
        })}
      </div>
    </main>
  );
}

export default App;
