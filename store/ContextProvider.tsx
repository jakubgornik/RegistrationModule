import { createContext, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface FormValues {
  password: string;
  repeatedPassword: string;
  nip: number;
  email: string;
  position: string;
  phone: string;
}

interface FormContextProps {
  formData: FormValues;
  setFormData: React.Dispatch<React.SetStateAction<FormValues>>;
}

const initialFormValues: FormValues = {
  password: "",
  repeatedPassword: "",
  nip: 0,
  email: "",
  position: "",
  phone: "",
};

export const FormContext = createContext<FormContextProps>({
  formData: initialFormValues,
  setFormData: () => {},
});

const FormContextProvider = ({ children }: Props) => {
  const [formData, setFormData] = useState<FormValues>(initialFormValues);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
export default FormContextProvider;
