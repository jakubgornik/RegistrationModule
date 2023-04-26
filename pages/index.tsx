import {
  Button,
  Typography,
  styled,
  TextField,
  Box,
  Autocomplete,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { bgcolor } from "@mui/system";
import { useState } from "react";

export default function Home() {
  const [inputData, setInputData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    autocomplete: null,
  });

  const Container = styled(Box)({
    // height: "70vh",
    // width: "70vw",
    // backgroundColor: "#F7F7F7",
    // margin: "60px auto",
    // border: "solid 1px black",
    // borderRadius: "10px",
  });

  const Header = styled(Box)({
    // height: "3rem",
    // backgroundColor: "#222222",
    // borderRadius: "9px 9px 0px 0px",
  });

  const InnerBox = styled(Box)({
    // display: "flex",
    // "flex-wrap": "wrap",
    // "max-width": "1280px",
    // margin: "0 auto",
    // "justify-content": "center",
  });

  const Input = styled(TextField)({
    // margin: "8px",
    // flex: "1 0 300px",
    // "max-width": "100%",
  });

  return (
    <Container
      sx={{
        backgroundColor: "tomato",
        height: "100vh",
        maxWidth: { xs: "10vw", sm: "20vw" },
        mx: "auto",
      }}
    >
      <Typography></Typography>
      <Header>
        <Typography variant="h5" component="h2" mx={2} color={["white", "red"]}>
          Please enter your data
        </Typography>
      </Header>
      <InnerBox>
        <Input name="input1" label="Input 1" />
        <Input name="input2" label="Input 2" />
        <Input name="input3" label="Input 3" />
        <Input name="input4" label="Input 4" />
        <Input name="input5" label="Input 5" type="number" required />
        <Autocomplete
          sx={{ maxWidth: "50%" }}
          options={["Option 1", "Option 2", "Option 3"]}
          renderInput={(params) => <Input {...params} label="Autocomplete" />}
        />
      </InnerBox>
    </Container>
  );
}
