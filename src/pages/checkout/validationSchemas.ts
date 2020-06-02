import * as Yup from 'yup';

export const OrderSchema = Yup.object().shape({
  customerName: Yup.string().max(50, 'Too Long!').required('Required'),
  customerSurname: Yup.string().max(50, 'Too Long!').required('Required'),
  customerCity: Yup.string().max(50, 'Too Long!').required('Required'),
  customerNovaPoshtaDep: Yup.number().typeError('Must be a number').required('Required'),
  customerPhone: Yup.string().max(50, 'Too Long!').required('Required'),
  customerEmail: Yup.string().email('Invalid email'),
});
