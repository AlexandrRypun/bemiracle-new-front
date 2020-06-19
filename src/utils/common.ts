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

export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return isNaN(date.getTime())
    ? ''
    : new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
        .format(date)
        .replace(/\//g, '.');
};
