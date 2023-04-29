import {
  Button,
  Typography,
  TextField,
  Box,
  Autocomplete,
  Container,
  FormControl,
} from "@mui/material";

import { useState } from "react";

const sxContainer = {
  backgroundColor: "#F7F7F7",
  maxWidth: { xs: "70vw", sm: "75vw", xl: "80vw" },
  mx: "auto",
  padding: "0 !important",
  border: "0.5px #333333 solid",
  borderRadius: "11px 11px 0px 0px",
};

const sxHeader = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: ["5rem", "4rem"],
  backgroundColor: "#333333",
  borderRadius: "9px 9px 0px 0px",
};

const sxSubmitButton = {
  width: "20%",
  alignSelf: "flex-end",
  backgroundColor: "#333333",
  borderRadius: "9px",
  mt: 2,
  ":hover": {
    opacity: "80%",
    backgroundColor: "#333333",
    transition: "1s",
  },
};

const sxFormTitle = {
  maxWidth: { xs: "50vw", sm: "75vw", xl: "80vw" },
  textAlign: "center",
  color: "#FFFFFF",
};

const sxInnerBox = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  maxWidth: "80%",
  mx: "auto",
  py: 5,
  px: 4,
};

const sxInputs = {
  mb: 2,
  backdropFilter: "blur(16px)",
  "& .MuiFilledInput-root:after": {
    borderBottom: "2px solid #777777",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#777777",
  },
};

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
  };

  return (
    <Container sx={sxContainer}>
      <Box sx={sxHeader}>
        <Typography variant="h5" component="h2" sx={sxFormTitle}>
          Moduł rejestracji użytkownika
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
            autoComplete="off"
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
            Dalej
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}
