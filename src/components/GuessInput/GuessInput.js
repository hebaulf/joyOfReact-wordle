import { useState } from 'react';

const GuessInput = ({ handleSubmitGuess, gameStatus }) => {
  const [tentativeGuess, setTentativeGuess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      alert('Please enter exactly 5 characters. 💖');
      return;
    }

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        required
        disabled={gameStatus !== 'running'}
        minLength="5"
        maxLength="5"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
};

export default GuessInput;
