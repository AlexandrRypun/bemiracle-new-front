import React, { ChangeEvent, useCallback } from 'react';

import './styles.css';

type Props = {
  id: string;
  name: string;
  value: string | number;
  onChange: (value: string) => void;
  checked?: boolean;
  label?: string;
};
const Radio: React.FC<Props> = ({ id, name, value, onChange, checked = false, label }) => {
  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value), [onChange]);

  return (
    <>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        defaultChecked={checked}
        onChange={changeHandler}
        className="input-radio"
      />
      <label htmlFor={id} className="input-radio-label">
        {label}
      </label>
    </>
  );
};

export default Radio;
