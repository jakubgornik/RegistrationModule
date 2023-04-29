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
  sxSubmitButtonReturn,
  sxFormTitle,
  sxInnerBox,
  sxInputs,
} from "../utils/sxProps";

import {
  summaryHeaderTitle,
  registrationSummaryButtonTextProcess,
  registrationSummaryButtonTextReturn,
} from "../utils/textData";
import { FormContext } from "@/store/ContextProvider";
import { useContext } from "react";
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
  // usecontext wartosci globalne, w index submit form bedzie je zapisywal globalnie a tutaj beda wyswietlane jako defaultvalue/value
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // fetch async wywolany definicja funkcji odzdzielnie jak response.ok false to modal z errorem
  };

  const context = useContext(FormContext);

  return (
    <Container sx={sxContainer}>
      <Box sx={sxHeader}>
        <Typography variant="h5" component="h2" sx={sxFormTitle}>
          {summaryHeaderTitle}
        </Typography>
      </Box>
      <Box sx={sxInnerBox}>
        <FormControl component="form" onSubmit={handleFormSubmit}>
          <TextField
            sx={sxInputs}
            variant="filled"
            name="password"
            type="password"
            label="Hasło"
            required
            value={context.formData.password}
            // defaultValue={context.formData.password}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            sx={sxInputs}
            variant="filled"
            name="repeatedPassword"
            label="Powtórz Hasło"
            type="password"
            required
            value={context.formData.repeatedPassword}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            sx={sxInputs}
            variant="filled"
            name="nip"
            label="NIP"
            type="number"
            required
            value={context.formData.nip}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            sx={sxInputs}
            variant="filled"
            name="email"
            label="Email"
            type="email"
            required
            value={context.formData.email}
            InputProps={{
              readOnly: true,
            }}
          />
          <Autocomplete
            sx={sxInputs}
            options={position}
            value={context.formData.position}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                name="position"
                label="Stanowisko"
                required
                InputProps={{
                  readOnly: true,
                }}
              />
            )}
          />
          <TextField
            sx={sxInputs}
            variant="filled"
            name="phone"
            label="Telefon"
            type="tel"
            value={context.formData.phone}
            InputProps={{
              readOnly: true,
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              type="button"
              sx={sxSubmitButtonReturn}
              style={{ textTransform: "none" }}
            >
              {registrationSummaryButtonTextReturn}
            </Button>
            <Button
              variant="contained"
              type="submit"
              sx={sxSubmitButtonProcess}
              style={{ textTransform: "none" }}
            >
              {registrationSummaryButtonTextProcess}
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Container>
  );
}
