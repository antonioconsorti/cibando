export interface User {
  _id: number;
  email: string;
  name: string;
  role?: string;
  note?: string;
  password: string;
  createdAt?: string;
}
