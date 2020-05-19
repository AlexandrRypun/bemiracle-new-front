import React, { ChangeEvent, useCallback, useMemo } from 'react';

import './styles.css';

type Props = {
  options: { label: string; value: string | number }[];
  changeHandler: (selected: string | number) => void;
  selected?: string | number;
  classes?: string;
};
const SelectBox: React.FC<Props> = ({ options, changeHandler, selected, classes }) => {
  const selectedValue = useMemo(() => selected || options[0].value, [selected, options]);
  const onSelectedChanged = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      changeHandler(e.target.value);
    },
    [changeHandler],
  );
  return (
    <select onChange={onSelectedChanged} value={selectedValue} className={`select-box ${classes || ''}`}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
