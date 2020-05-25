import React, { ChangeEvent } from 'react';

import './styles.css';

type Props = {
  value: number;
  changeHandler: (newVal: number) => void;
};
const InputNumber: React.FC<Props> = ({ value, changeHandler }) => {
  return (
    <div className="input-number">
      <span className="arrow minus" onClick={(): void => changeHandler(value - 1)} />
      <input
        value={value}
        className="value"
        onChange={(e: ChangeEvent<HTMLInputElement>): void => changeHandler(Number(e.target.value))}
      />
      <span className="arrow plus" onClick={(): void => changeHandler(value + 1)} />
    </div>
  );
};

export default InputNumber;
