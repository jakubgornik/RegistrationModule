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
  sxSubmitButton,
  sxFormTitle,
  sxInnerBox,
  sxInputs,
} from "../utils/sxProps";

import { headerTitle, registrationButtonText } from "../utils/textData";

import { useState } from "react";

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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with values:", formData);
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
          />
          <TextField
            sx={sxInputs}
            onChange={handleInputChange}
            variant="filled"
            name="repeatedPassword"
            label="Powtórz Hasło"
            type="password"
            required
          />
          <TextField
            sx={sxInputs}
            onChange={handleInputChange}
            variant="filled"
            name="nip"
            label="NIP"
            type="number"
            required
          />
          <TextField
            sx={sxInputs}
            onChange={handleInputChange}
            variant="filled"
            name="email"
            label="Email"
            type="email"
            required
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
          />
          <Button
            variant="contained"
            type="submit"
            sx={sxSubmitButton}
            style={{ textTransform: "none" }}
          >
            {registrationButtonText}
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}
