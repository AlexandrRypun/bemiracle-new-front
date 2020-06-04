import React from 'react';
import { Field, useField } from 'formik';

import './styles.css';

type Props = {
  id: string;
  name: string;
  label: string | React.ReactElement;
  wrapperClasses?: string;
  required?: boolean;
  type?: 'text' | 'password';
};
const Input: React.FC<Props> = ({ label, wrapperClasses = '', required = false, ...props }) => {
  const [field, { touched, error }] = useField(props);

  return (
    <div className={`form-field ${wrapperClasses}`}>
      <label htmlFor={props.id} className={error && touched ? 'error' : ''}>
        {label}
        {required && ' *'}
      </label>
      <Field type="text" {...field} {...props} />
      {error && touched ? <p className="field-error">{error}</p> : null}
    </div>
  );
};

export default Input;
