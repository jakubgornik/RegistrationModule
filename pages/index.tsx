import {
  Button,
  Typography,
  TextField,
  Box,
  Autocomplete,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";

const sxContainer = {
  backgroundColor: "#F7F7F7",
  height: "85vh",
  maxWidth: { xs: "70vw", sm: "75vw", xl: "80vw" },
  mx: "auto",
  padding: "0 !important",
  border: "0.5px #222222 solid",
  borderRadius: "11px 11px 0px 0px",
};

const sxHeader = {
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
  height: ["4.5rem", "4rem"],
  backgroundColor: "#333333",
  borderRadius: "9px 9px 0px 0px",
};

const sxFormTitle = {
  maxWidth: { xs: "50vw", sm: "75vw", xl: "80vw" },
  textAlign: "center",
  color: "#FFFFFF",
};

const sxInnerBox = {
  display: "flex",
  "flex-direction": "column",
  "flex-wrap": "wrap",
  maxWidth: "80%",
  mx: "auto",
  pt: 4,
};

const sxInputs = {
  mb: 2,
  "& .MuiFilledInput-root:after": {
    borderBottom: "2px solid #777777",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#777777",
  },
};

export default function Home() {
  return (
    <Container sx={sxContainer}>
      <Box sx={sxHeader}>
        <Typography variant="h5" component="h2" sx={sxFormTitle}>
          Please enter your data
        </Typography>
      </Box>
      <Box sx={sxInnerBox}>
        <TextField
          variant="filled"
          name="password-input"
          label="Hasło"
          sx={sxInputs}
          required
        />
        <TextField
          variant="filled"
          name="repeatPassword-input"
          label="Powtórz Hasło"
          sx={sxInputs}
          required
        />
        <TextField
          variant="filled"
          name="nip-input"
          label="NIP"
          sx={sxInputs}
          required
        />
        <TextField
          variant="filled"
          name="email-input"
          label="Email"
          type="email"
          sx={sxInputs}
          required
        />
        <Autocomplete
          sx={sxInputs}
          options={["Option 1", "Option 2", "Option 3"]}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              required
              label="Stanowisko"
            />
          )}
        />
        <TextField
          variant="filled"
          name="phone-input"
          label="Telefon"
          sx={sxInputs}
        />
      </Box>
    </Container>
  );
}
