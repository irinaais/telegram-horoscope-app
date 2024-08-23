import './App.css';
import {zodiacSignsEN, zodiacSignsRU} from '../../utils/constants';
import Sign from '../Sign/Sign';
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('RU');
  const listOfHoroscope= language === 'RU' ? zodiacSignsRU : zodiacSignsEN;
  const userLanguage = language === 'RU' ? 'original' : 'translated';

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'RU' ? 'EN' : 'RU'));
  };

  return (
    <main className='main'>
      <button className='language-toggle' onClick={toggleLanguage}>
        {language === 'RU' ? 'Switch to English' : 'Переключиться на русский'}
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
