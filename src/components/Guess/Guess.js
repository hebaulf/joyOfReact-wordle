import React from 'react';
import { range } from '../../utils';

const Cell = ({ letter, status }) => {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>;
};

const Guess = ({ value }) => {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={value ? value[num].letter : undefined}
          status={value ? value[num].status : undefined}
        />
      ))}
    </p>
  );
};

export default Guess;
