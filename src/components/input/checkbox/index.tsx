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
const Checkbox: React.FC<Props> = ({ id, name, value, onChange, checked = false, label }) => {
  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value), [onChange]);

  return (
    <label className="input-checkbox-label">
      <input
        id={id}
        name={name}
        type="checkbox"
        value={value}
        defaultChecked={checked}
        onChange={changeHandler}
        className="input-checkbox"
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
