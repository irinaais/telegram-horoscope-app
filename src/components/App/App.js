import './App.css';
import {zodiacSignsEN, zodiacSignsRU} from '../../utils/constants';
import Sign from '../Sign/Sign';
import { getHoroscope } from '../../app-component/network/Api';

function App() {
  const language= 'RU';
  let listOfHoroscope= language === 'RU' ? zodiacSignsRU : zodiacSignsEN;

  console.log(language);

  (async () => {
    const horoscope = await getHoroscope('aries', 'original', 'today');
    console.log(horoscope);
  })();

  return (
    <main className='main'>
      {listOfHoroscope.map((sign, index) => <Sign key={index} sign={sign} />)}
    </main>
  );
}

export default App;
