import {
  Button,
  Typography,
  TextField,
  Box,
  Autocomplete,
  Container,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import {
  sxContainer,
  sxHeader,
  sxSubmitButtonProceed,
  sxSubmitButtonReturn,
  sxFormTitle,
  sxInnerBox,
  sxInputs,
  sxSummaryButtonsBox,
} from "../utils/sxProps";

import {
  summaryHeaderTitle,
  registrationSummaryButtonTextProcess,
  registrationSummaryButtonTextReturn,
  registrationButtonText,
  modalErrorTitle,
  modalErrorDescription,
  modalErrorStatusDescription,
} from "../utils/textData";
import { position } from "@/utils/basicData";

import { Transition } from "@/components/transition";
import { FormContext } from "@/store/ContextProvider";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

export default function Summary() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errorStatus, setErrorStatus] = useState<number | null>(null);
  const context = useContext(FormContext);
  const router = useRouter();

  const postData = async () => {
    const response = await fetch("someUrl-simulateApiNotAvailable", {
      method: "POST",
      body: JSON.stringify(context.formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      setErrorStatus(response.status);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalVisible(!isModalVisible);
    postData();
  };

  const navigateBack = () => {
    router.push("/");
  };

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

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
          <Box sx={sxSummaryButtonsBox}>
            <Button
              onClick={navigateBack}
              variant="contained"
              type="button"
              sx={sxSubmitButtonReturn}
            >
              {registrationSummaryButtonTextReturn}
            </Button>
            <Button
              variant="contained"
              type="submit"
              sx={sxSubmitButtonProceed}
            >
              {registrationSummaryButtonTextProcess}
            </Button>
          </Box>
          <Dialog
            open={isModalVisible}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleModal}
          >
            <DialogTitle>{modalErrorTitle}</DialogTitle>
            <DialogContent>
              <DialogContentText>{modalErrorDescription}</DialogContentText>
              <DialogContentText>
                {modalErrorStatusDescription} {errorStatus}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                sx={sxSubmitButtonProceed}
                onClick={handleModal}
              >
                {registrationButtonText}
              </Button>
            </DialogActions>
          </Dialog>
        </FormControl>
      </Box>
    </Container>
  );
}
