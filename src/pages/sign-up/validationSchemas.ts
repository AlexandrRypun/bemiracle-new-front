import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().max(50, 'Too Long!').required('Required'),
  surname: Yup.string().max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short').max(50, 'Too Long!').required('Required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Not equal to password')
    .required('Required'),
  phone: Yup.string().matches(/^\+\d{12}$/, 'Enter real mobile number'),
  city: Yup.string().max(50, 'Too Long!'),
  novaPoshtaDep: Yup.number().nullable().typeError('Must be a number'),
});
