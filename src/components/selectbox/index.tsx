import React, { ChangeEvent, useCallback, useMemo } from 'react';

type Props = {
  options: { label: string; value: string | number }[];
  selected?: string | number;
  changeHandler: (selected: string | number) => void;
};
const SelectBox: React.FC<Props> = ({ options, selected, changeHandler }) => {
  const selectedValue = useMemo(() => selected || options[0].value, [selected, options]);
  const onSelectedChanged = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      changeHandler(e.target.value);
    },
    [changeHandler],
  );
  return (
    <select onChange={onSelectedChanged} value={selectedValue}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
