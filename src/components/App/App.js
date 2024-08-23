import './App.css';
import { zodiacSignsRU } from '../../utils/constants';
import Sign from '../Sign/Sign';

function App() {
  return (
    <main className='main'>
      {zodiacSignsRU.map((sign, index) => <Sign key={index} sign={sign} />)}
    </main>
  );
}

export default App;
