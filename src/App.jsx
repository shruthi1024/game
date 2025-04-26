import {useState} from 'react'
function App(){
  const [target]= useState(Math.floor(Math.random()*100))
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const checkGuess = () =>{
    if(parseInt(guess) === target){
      setMessage('Congragulations! you guessed the correct number');
    }else{
      setMessage(guess > target? 'Too high!': 'Too Low!');
    }
    setGuess('');
  };
  return(
    <div>
      <center><h1>Guess th number game</h1>
      <p>Guess the number between 1 and 100</p>
      <input type="number" value={guess} onChange={(e)=> setGuess(e.target.value)}></input>
      <button onClick={checkGuess}>Check</button>
      <p>{message}</p></center>
  
    </div>
  );
}
export default App;