import { useState } from 'react';
import { Mask, UnMask } from './helper/functions/index';

function App() {

  const answer = 'leo'
  const [current, setCurrent] = useState(Mask(answer));
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(6);
  const [isOver, setIsOver] = useState(false);
  const [isGuessWord, setIsGuessWord] = useState(false)
  console.log(answer)

  const Guess = (data) => {
    const prev = current;
    setCurrent(UnMask(data, answer, current));
    if(prev === current){
      setAttempts(attempts - 1);
    }
  }

  const changeWordGuess = () => {
    if(isGuessWord === false){
      document.querySelector('button').style.color = 'red'
    }else{
      document.querySelector('button').style.color = 'black'
    }

    setIsGuessWord(!isGuessWord)
  }

  return (
    <div className="App">
      <h5>guesses left: {attempts}</h5>
      <input type="text" onKeyDown={e => {
        if(e.key === 'Enter' && attempts!==0){
          
          Guess(e.target.value);
          e.target.value = '';

        }
      }} maxLength={isGuessWord ? 30 : 1}/>
      <button className="btnGuessWord" onClick={() => {
    if(isGuessWord === false){
      document.querySelector('button').style.color = 'red'
    }else{
      document.querySelector('button').style.color = 'black'
    }

    setIsGuessWord(!isGuessWord)
  }}>Guess word</button>
      <p>{current}</p>
      <p>{(attempts===0 || (!current.includes('-')))? <h1>GameOver</h1> : '' }</p>
    </div>
  );
}

export default App;
