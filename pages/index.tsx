import {
  Button,
  Typography,
  TextField,
  Box,
  Autocomplete,
  Container,
  FormControl,
} from "@mui/material";
import {
  sxContainer,
  sxHeader,
  sxSubmitButtonProcess,
  sxFormTitle,
  sxInnerBox,
  sxInputs,
} from "../utils/sxProps";
import { headerTitle, registrationButtonText } from "../utils/textData";
import { useState } from "react";
import * as Yup from "yup";

const passwordValidationSchema = Yup.object().shape({
  password: Yup.string().required().min(8),
});

const emailValidationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

const nipValidationSchema = Yup.object().shape({
  nip: Yup.string().required().min(10),
});

const positionValidationSchema = Yup.object().shape({
  position: Yup.string()
    .oneOf([
      "Administrator",
      "Dyrektor",
      "Inspektor",
      "Kierownik",
      "Księgowy",
      "Pełnomocnik",
    ])
    .required(),
});

const phoneValidationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\d{9}$/)
    .required(),
});

const position: string[] = [
  "Administrator",
  "Dyrektor",
  "Inspektor",
  "Kierownik",
  "Księgowy",
  "Pełnomocnik",
];

interface FormValues {
  password: string;
  repeatedPassword: string;
  nip: number;
  email: string;
  position: string;
  phone: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormValues>({
    password: "",
    repeatedPassword: "",
    nip: 0,
    email: "",
    position: "",
    phone: "",
  });

  const [validationData, setValidationData] = useState({
    passwordValidation: true,
    repeatedPasswordValiadtion: true,
    nipValidation: true,
    emailValidation: true,
    positionValidation: true,
    phoneValidation: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleAutocomplete = (
    event: React.ChangeEvent<{}>,
    value: string | null
  ) => {
    if (value !== null) {
      setFormData((prevValues) => ({
        ...prevValues,
        ["position"]: value,
      }));
    }
  };

  const validatePassword = () => {};

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with values:", formData.password);

    const isPasswordValid = await passwordValidationSchema.isValid({
      password: formData.password,
    });
    let isRepeatedPasswordValid: boolean;
    formData.password === formData.repeatedPassword
      ? (isRepeatedPasswordValid = true)
      : (isRepeatedPasswordValid = false);

    const isNipValid = await nipValidationSchema.isValid({
      nip: formData.nip,
    });
    const isEmailValid = await emailValidationSchema.isValid({
      email: formData.email,
    });
    const isPositionValid = await positionValidationSchema.isValid({
      position: formData.position,
    });
    const isPhoneValid = await phoneValidationSchema.isValid({
      phone: formData.phone,
    });

    setValidationData((prevData) => ({
      ...prevData,
      passwordValidation: isPasswordValid,
      repeatedPasswordValiadtion: isRepeatedPasswordValid,
      nipValidation: isNipValid,
      emailValidation: isEmailValid,
      positionValidation: isPositionValid,
      phoneValidation: isPhoneValid,
    }));

    // przekazanie formData do context? zeby byl globalny
  };

  return (
    <Container sx={sxContainer}>
      <Box sx={sxHeader}>
        <Typography variant="h5" component="h2" sx={sxFormTitle}>
          {headerTitle}
        </Typography>
      </Box>
      <Box sx={sxInnerBox}>
        <FormControl component="form" onSubmit={handleFormSubmit}>
          <TextField
            sx={sxInputs}
            onChange={handleInputChange}
            variant="filled"
            name="password"
            type="password"
            label="Hasło"
            required
            error={!validationData.passwordValidation}
          />
          <TextField
            sx={sxInputs}
            onChange={handleInputChange}
            variant="filled"
            name="repeatedPassword"
            label="Powtórz Hasło"
            type="password"
            required
            error={!validationData.repeatedPasswordValiadtion}
          />
          <TextField
            sx={sxInputs}
            onChange={handleInputChange}
            variant="filled"
            name="nip"
            label="NIP"
            type="number"
            required
            error={!validationData.nipValidation}
          />
          <TextField
            sx={sxInputs}
            onChange={handleInputChange}
            variant="filled"
            name="email"
            label="Email"
            type="email"
            required
            error={!validationData.emailValidation}
          />
          <Autocomplete
            sx={sxInputs}
            options={position}
            onChange={handleAutocomplete}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                name="position"
                label="Stanowisko"
                required
                error={!validationData.positionValidation}
              />
            )}
          />
          <TextField
            sx={sxInputs}
            onChange={handleInputChange}
            variant="filled"
            name="phone"
            label="Telefon"
            type="tel"
            error={!validationData.phoneValidation}
          />
          <Button
            variant="contained"
            type="submit"
            sx={sxSubmitButtonProcess}
            style={{ textTransform: "none" }}
          >
            {registrationButtonText}
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}
