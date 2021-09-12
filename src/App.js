import { useState } from 'react';
import './App.css';

import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {

  const [min, setMin] = useState(10)
  const [max, setMax] = useState(20)

  return (
    <div className="App">
      <h1>Exercício React-Redux</h1>
      <div className="linha">
       <Intervalo 
        max={max} 
        min={min}
        onChangedMin={setMin} 
        onChangedMax={setMax} 
       />
      </div>
      <div className="linha">
       <Media max={max} min={min}/>
       <Soma max={max} min={min}/>
       <Sorteio max={max} min={min}/>
      </div>
    </div>
  );
}

export default App;
