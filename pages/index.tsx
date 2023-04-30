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
import {
  passwordValidationSchema,
  emailValidationSchema,
  nipValidationSchema,
  positionValidationSchema,
  phoneValidationSchema,
} from "../utils/validationSchemas";
import { useState, useContext } from "react";
import { FormContext } from "@/store/ContextProvider";
import { useRouter } from "next/router";

const position: string[] = [
  "Administrator",
  "Dyrektor",
  "Inspektor",
  "Kierownik",
  "Księgowy",
  "Pełnomocnik",
  "",
];

interface FormValues {
  password: string;
  repeatedPassword: string;
  nip: number;
  email: string;
  position: string;
  phone: string;
}

export default function FormModule() {
  const context = useContext(FormContext);
  const router = useRouter();
  const [formData, setFormData] = useState<FormValues>({
    password: context.formData.password,
    repeatedPassword: context.formData.repeatedPassword,
    nip: context.formData.nip,
    email: context.formData.email,
    position: context.formData.position,
    phone: context.formData.phone,
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

  const handlePasswordValidation = async () => {
    const isPasswordValid = await passwordValidationSchema.isValid({
      password: formData.password,
    });
    setValidationData((prevData) => ({
      ...prevData,
      passwordValidation: isPasswordValid,
    }));
  };

  const handleRepeatedPasswordValidation = async () => {
    let isRepeatedPasswordValid: boolean;
    formData.password === formData.repeatedPassword
      ? (isRepeatedPasswordValid = true)
      : (isRepeatedPasswordValid = false);
    setValidationData((prevData) => ({
      ...prevData,
      repeatedPasswordValiadtion: isRepeatedPasswordValid,
    }));
  };

  const handleEmailValidation = async () => {
    const isEmailValid = await emailValidationSchema.isValid({
      email: formData.email,
    });
    setValidationData((prevData) => ({
      ...prevData,
      emailValidation: isEmailValid,
    }));
  };

  const handleNipValidation = async () => {
    const isNipValid = await nipValidationSchema.isValid({
      nip: formData.nip,
    });
    setValidationData((prevData) => ({
      ...prevData,
      nipValidation: isNipValid,
    }));
  };

  const handlePositionValidation = async () => {
    const isPositionValid = await positionValidationSchema.isValid({
      position: formData.position,
    });
    setValidationData((prevData) => ({
      ...prevData,
      positionValidation: isPositionValid,
    }));
  };

  const handlePhoneValidation = async () => {
    const isPhoneValid = await phoneValidationSchema.isValid({
      phone: formData.phone,
    });
    setValidationData((prevData) => ({
      ...prevData,
      phoneValidation: isPhoneValid,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    context.setFormData(formData);
    router.push("/summary");
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
            defaultValue={context.formData.password}
            error={!validationData.passwordValidation}
            helperText={
              !validationData.passwordValidation ? "Nieprawidłowe dane" : ""
            }
            onBlur={handlePasswordValidation}
          />
          <TextField
            sx={sxInputs}
            onChange={handleInputChange}
            variant="filled"
            name="repeatedPassword"
            label="Powtórz Hasło"
            type="password"
            required
            defaultValue={context.formData.repeatedPassword}
            error={!validationData.repeatedPasswordValiadtion}
            helperText={
              !validationData.repeatedPasswordValiadtion
                ? "Nieprawidłowe dane"
                : ""
            }
            onBlur={handleRepeatedPasswordValidation}
          />
          <TextField
            sx={sxInputs}
            onChange={handleInputChange}
            variant="filled"
            name="nip"
            label="NIP"
            type="number"
            required
            defaultValue={context.formData.nip}
            error={!validationData.nipValidation}
            helperText={
              !validationData.nipValidation ? "Nieprawidłowe dane" : ""
            }
            onBlur={handleNipValidation}
          />
          <TextField
            sx={sxInputs}
            onChange={handleInputChange}
            variant="filled"
            name="email"
            label="Email"
            type="email"
            required
            defaultValue={context.formData.email}
            error={!validationData.emailValidation}
            helperText={
              !validationData.emailValidation ? "Nieprawidłowe dane" : ""
            }
            onBlur={handleEmailValidation}
          />
          <Autocomplete
            sx={sxInputs}
            options={position || []}
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
                onBlur={handlePositionValidation}
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
            defaultValue={context.formData.phone}
            error={!validationData.phoneValidation}
            helperText={
              !validationData.phoneValidation ? "Nieprawidłowe dane" : ""
            }
            onBlur={handlePhoneValidation}
          />
          <Button
            variant="contained"
            type="submit"
            sx={sxSubmitButtonProcess}
            style={{ textTransform: "none" }}
            disabled={
              !validationData.emailValidation ||
              !validationData.nipValidation ||
              !validationData.positionValidation ||
              !validationData.passwordValidation ||
              !validationData.repeatedPasswordValiadtion
            }
          >
            {registrationButtonText}
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}
