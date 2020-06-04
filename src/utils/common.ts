import { AxiosError } from 'axios';

type FieldErrors = {
  [field: string]: string;
};
export const extractFieldErrors = (e: AxiosError): FieldErrors => {
  const response: FieldErrors = {};
  const errors = e?.response?.data?.message;
  if (Array.isArray(errors)) {
    errors.forEach(error => {
      const field = error.property;
      const messages = error?.constraints;
      if (field && messages) {
        response[field] = String(Object.values(messages)[0]);
      }
    });
  }
  return response;
};
