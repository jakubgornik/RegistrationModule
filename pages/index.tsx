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
import { useState, useContext } from "react";
import {
  passwordValidationSchema,
  emailValidationSchema,
  nipValidationSchema,
  positionValidationSchema,
  phoneValidationSchema,
} from "../utils/validationSchemas";
import { FormContext } from "@/store/ContextProvider";
import Link from "next/link";
import Test from "./components/test";

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

  const context = useContext(FormContext);

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

  const validatePassword = async () => {
    const isPasswordValid = await passwordValidationSchema.isValid({
      password: formData.password,
    });
    setValidationData((prevData) => ({
      ...prevData,
      passwordValidation: isPasswordValid,
    }));
  };

  const validateRepeatedPassword = async () => {
    let isRepeatedPasswordValid: boolean;
    formData.password === formData.repeatedPassword
      ? (isRepeatedPasswordValid = true)
      : (isRepeatedPasswordValid = false);
    setValidationData((prevData) => ({
      ...prevData,
      repeatedPasswordValiadtion: isRepeatedPasswordValid,
    }));
  };

  const validateEmail = async () => {
    const isEmailValid = await emailValidationSchema.isValid({
      email: formData.email,
    });
    setValidationData((prevData) => ({
      ...prevData,
      emailValidation: isEmailValid,
    }));
  };

  const validateNip = async () => {
    const isNipValid = await nipValidationSchema.isValid({
      nip: formData.nip,
    });
    setValidationData((prevData) => ({
      ...prevData,
      nipValidation: isNipValid,
    }));
  };

  const validatePosition = async () => {
    const isPositionValid = await positionValidationSchema.isValid({
      position: formData.position,
    });
    setValidationData((prevData) => ({
      ...prevData,
      positionValidation: isPositionValid,
    }));
  };

  const validatePhone = async () => {
    const isPhoneValid = await phoneValidationSchema.isValid({
      phone: formData.phone,
    });
    setValidationData((prevData) => ({
      ...prevData,
      phoneValidation: isPhoneValid,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    // context.setFormData(formData);
    console.log("dupa");
  };

  const testowySubmit = () => {
    context.setFormData(formData);
  };

  return (
    <Container sx={sxContainer}>
      <Box sx={sxHeader}>
        <Typography variant="h5" component="h2" sx={sxFormTitle}>
          {headerTitle}
        </Typography>
      </Box>
      <Box sx={sxInnerBox}>
        <FormControl onSubmit={handleFormSubmit}>
          <TextField
            sx={sxInputs}
            onChange={handleInputChange}
            variant="filled"
            name="password"
            type="password"
            label="Hasło"
            required
            error={!validationData.passwordValidation}
            helperText={
              !validationData.passwordValidation ? "Nieprawidłowe dane" : ""
            }
            onBlur={validatePassword}
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
            helperText={
              !validationData.repeatedPasswordValiadtion
                ? "Nieprawidłowe dane"
                : ""
            }
            onBlur={validateRepeatedPassword}
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
            helperText={
              !validationData.nipValidation ? "Nieprawidłowe dane" : ""
            }
            onBlur={validateNip}
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
            helperText={
              !validationData.emailValidation ? "Nieprawidłowe dane" : ""
            }
            onBlur={validateEmail}
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
                helperText={
                  !validationData.positionValidation ? "Nieprawidłowe dane" : ""
                }
                onBlur={validatePosition}
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
            helperText={
              !validationData.phoneValidation ? "Nieprawidłowe dane" : ""
            }
            onBlur={validatePhone}
          />

          <Link href="summary" passHref legacyBehavior>
            <Button
              onClick={testowySubmit}
              // component={Link}
              // href=""
              variant="contained"
              type="submit"
              sx={sxSubmitButtonProcess}
              style={{ textTransform: "none" }}
              disabled={
                !validationData.emailValidation ||
                !validationData.phoneValidation ||
                !validationData.nipValidation ||
                !validationData.positionValidation ||
                !validationData.passwordValidation ||
                !validationData.repeatedPasswordValiadtion
              }
            >
              Navigate
            </Button>
          </Link>
        </FormControl>
        <Test />
      </Box>
    </Container>
  );
}
