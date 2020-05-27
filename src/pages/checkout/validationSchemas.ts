import * as Yup from 'yup';

export const OrderSchema = Yup.object().shape({
  name: Yup.string().max(50, 'Too Long!').required('Required'),
  surname: Yup.string().max(50, 'Too Long!').required('Required'),
  city: Yup.string().max(50, 'Too Long!'),
  phone: Yup.string().max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
