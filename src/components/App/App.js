import './App.css';
import { zodiacSignsRU } from '../../utils/constants';
import Sign from '../Sign/Sign';
import { getHoroscope } from "../../app-component/network/Api";

function App() {
  (async () => {
    const horoscope = await getHoroscope('aries', 'original', 'today');
    console.log(horoscope);
  })();

  return (
    <main className='main'>
      {zodiacSignsRU.map((sign, index) => <Sign key={index} sign={sign} />)}
    </main>
  );
}

export default App;
