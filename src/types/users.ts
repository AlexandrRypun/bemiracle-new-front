export interface User {
  id?: number;
  email: string;
  name: string;
  surname: string;
  phone: string | null;
  city: string | null;
  novaPoshtaDep: number | null;
}
