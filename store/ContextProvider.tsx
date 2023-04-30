import { createContext, useState } from "react";
import { Props, FormValues, FormContextProps } from "@/utils/interfaces";

const initialFormValues: FormValues = {
  password: "",
  repeatedPassword: "",
  nip: null,
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
