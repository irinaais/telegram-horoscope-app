import './App.css';
import {zodiacSignsEN, zodiacSignsRU} from '../../utils/constants';
import Sign from '../Sign/Sign';

function App() {
  const language= 'RU';
  const listOfHoroscope= language === 'RU' ? zodiacSignsRU : zodiacSignsEN;
  const userLanguage = language === 'RU' ? 'original' : 'translated';

  return (
    <main className='main'>
      {listOfHoroscope.map((sign, index) => {
        return <Sign
          key={index}
          sign={sign}
          language={userLanguage}
        />
      })}
    </main>
  );
}

export default App;
