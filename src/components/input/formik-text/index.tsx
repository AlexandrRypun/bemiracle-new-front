import React from 'react';
import { Field, useField } from 'formik';

type Props = {
  id: string;
  name: string;
  label: string;
  wrapperClasses?: string;
};
const Input: React.FC<Props> = ({ label, wrapperClasses = '', ...props }) => {
  const [field, { touched, error }] = useField(props);

  return (
    <div className={`form-field ${wrapperClasses}`}>
      <label htmlFor={props.id} className={error && touched ? 'error' : ''}>
        {label}
      </label>
      <Field {...field} {...props} type="text" />
      {error && touched ? <p className="field-error">{error}</p> : null}
    </div>
  );
};

export default Input;
