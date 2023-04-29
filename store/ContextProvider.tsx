// import { createContext, ReactNode, useState } from "react";

// interface Props {
//   children: ReactNode;
// }

// interface ContextType {
//   isNavigationVisible: boolean;
//   changeNavigationStatus: () => void;
// }

// // Init
// export const Context = createContext<ContextType>({
//   isNavigationVisible: false,
//   changeNavigationStatus: () => {},
// });

// // Provider
// const ContextProvider = ({ children }: Props) => {
//   const [isNavigationVisible, setIsNavigationVisible] = useState(false);

//   const changeNavigationDisplay = () => {
//     setIsNavigationVisible(!isNavigationVisible);
//   };

//   // Passed values
//   const contextValues: ContextType = {
//     isNavigationVisible: isNavigationVisible,
//     changeNavigationStatus: changeNavigationDisplay,
//   };

//   return <Context.Provider value={contextValues}>{children}</Context.Provider>;
// };

// export default ContextProvider;

import { createContext, useContext, useState, ReactNode } from "react";

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

// Init
export const FormContext = createContext<FormContextProps>({
  formData: initialFormValues,
  setFormData: () => {},
});

// export const useFormContext = () => useContext(FormContext);

const FormContextProvider = ({ children }: Props) => {
  const [formData, setFormData] = useState<FormValues>(initialFormValues);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
export default FormContextProvider;
