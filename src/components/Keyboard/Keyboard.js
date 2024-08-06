import React from 'react';

const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

const getStatusByLetter = (validatedGuesses) => {
  const statusObj = {};
  const allLetters = validatedGuesses.flat();

  allLetters.forEach(({ letter, status }) => {
    const currentStatus = statusObj[letter];

    if (currentStatus === undefined) {
      statusObj[letter] = status;
      return;
    }

    const STATUS_RANKS = {
      correct: 1,
      misplaced: 2,
      incorrect: 3,
    };

    const currentStatusRank = STATUS_RANKS[currentStatus];
    const newStatusRank = STATUS_RANKS[status];

    if (newStatusRank < currentStatusRank) {
      statusObj[letter] = status;
    }
  });

  return statusObj;
};

const Keyboard = ({ validatedGuesses }) => {
  const statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className="keyboard">
      {ROWS.map((row, i) => (
        <div key={`row_${i}`} className="keyboardRow">
          {row.map((letter) => (
            <div
              key={letter}
              className={`keyboardLetter ${
                statusByLetter[letter] || ''
              }`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
