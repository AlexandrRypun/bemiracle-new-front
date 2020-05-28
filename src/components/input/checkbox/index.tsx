import React, { ChangeEvent, useCallback } from 'react';

import './styles.css';
import { FieldInputProps } from 'formik';

type Props = {
  id: string;
  name: string;
  value: string | number;
  onChange: (value: string) => void;
  checked?: boolean;
  label?: string;
  field?: FieldInputProps<string>;
};
const Checkbox: React.FC<Props> = ({ id, name, value, onChange, checked = false, label, field }) => {
  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (field && field.onChange) {
        field.onChange(e);
      }
      onChange(e.target.value);
    },
    [field, onChange],
  );

  return (
    <label className="input-checkbox-label">
      <input
        id={id}
        name={name}
        type="checkbox"
        value={value}
        defaultChecked={checked}
        className="input-checkbox"
        {...field}
        onChange={changeHandler}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
