import { ReactNode } from "react";
export interface FormValues {
  password: string;
  repeatedPassword: string;
  nip: number | null;
  email: string;
  position: string;
  phone: string;
}

export interface Props {
  children: ReactNode;
}

export interface FormContextProps {
  formData: FormValues;
  setFormData: React.Dispatch<React.SetStateAction<FormValues>>;
}
