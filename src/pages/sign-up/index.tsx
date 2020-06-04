import React, { useCallback, useContext, useMemo } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Formik, FormikHelpers } from 'formik';

import { UserContext } from '../../contexts/user';
import useRequest from '../../hooks/use-request';
import { SignUpSchema } from './validationSchemas';
import Input from '../../components/input/formik-text';
import Button from '../../components/button';
import { User } from '../../types/users';
import { extractFieldErrors } from '../../utils/common';

import './styles.css';

const SignUpPage: React.FC = () => {
  const { user } = useContext(UserContext);
  const { t } = useTranslation();
  const history = useHistory();

  const initialValues: User = useMemo(
    () => ({
      name: '',
      surname: '',
      email: '',
      password: '',
      repeatPassword: '',
      phone: '+380',
      city: '',
      novaPoshtaDep: null,
    }),
    [],
  );

  const { create } = useRequest({ endpoint: 'auth/signup' });

  const submitHandler = useCallback(
    async (values, { setFieldError }: FormikHelpers<User>) => {
      try {
        await create(values);
        toast.success(t('signUp.messages.success'));
        history.push('/');
      } catch (e) {
        let showGeneralError = true;
        const fieldErrors = extractFieldErrors(e);
        Object.entries(fieldErrors).forEach(([field, message]) => {
          setFieldError(field, message);
          showGeneralError = false;
        });
        if (showGeneralError) {
          toast.error(t('common.messages.smthWrong'));
        }
      }
    },
    [create, history, t],
  );

  return user ? (
    <Redirect to="/" />
  ) : (
    <div className="registration-page">
      <h2>Register</h2>
      <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={SignUpSchema}>
        {({ handleSubmit }): JSX.Element => (
          <form className="registration-form" onSubmit={handleSubmit}>
            <Input id="name" name="name" label="Name" required wrapperClasses="form-row-first" />
            <Input id="surname" name="surname" label="Surname" required wrapperClasses="form-row-last" />
            <div className="clear" />
            <Input
              id="password"
              name="password"
              label="Password"
              type="password"
              required
              wrapperClasses="form-row-first"
            />
            <Input
              id="repeatPassword"
              name="repeatPassword"
              label="Repeat password"
              type="password"
              required
              wrapperClasses="form-row-last"
            />
            <div className="clear" />
            <Input id="email" name="email" label="Email" required wrapperClasses="form-row-first" />
            <Input
              id="phone"
              name="phone"
              label={
                <>
                  Phone <span className="label-help-text">(+380XXXXXXXXX)</span>
                </>
              }
              wrapperClasses="form-row-last"
            />
            <div className="clear" />
            <Input id="city" name="city" label="City" wrapperClasses="form-row-first" />
            <Input id="novaPoshtaDep" name="novaPoshtaDep" label="Nova Poshta Dep" wrapperClasses="form-row-last" />
            <p className="buttons">
              <Button label="Register" type="submit" className="registration-button" />
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpPage;
