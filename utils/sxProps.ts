export const sxContainer = {
  backgroundColor: "#F7F7F7",
  maxWidth: { xs: "70vw", sm: "75vw", xl: "80vw" },
  mx: "auto",
  padding: "0 !important",
  border: "0.5px #333333 solid",
  borderRadius: "11px 11px 0px 0px",
};

export const sxHeader = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: ["5rem", "4rem"],
  backgroundColor: "#333333",
  borderRadius: "9px 9px 0px 0px",
};

export const sxSubmitButtonProcess = {
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

export const sxSubmitButtonReturn = {
  width: "20%",
  backgroundColor: "#333333",
  borderRadius: "9px",
  mt: 2,
  ":hover": {
    opacity: "80%",
    backgroundColor: "#333333",
    transition: "1s",
  },
};

export const sxFormTitle = {
  maxWidth: { xs: "50vw", sm: "75vw", xl: "80vw" },
  textAlign: "center",
  color: "#FFFFFF",
};

export const sxInnerBox = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  maxWidth: "80%",
  mx: "auto",
  py: 5,
  px: 4,
};

export const sxInputs = {
  mb: 2,
  backdropFilter: "blur(16px)",
  "& .MuiFilledInput-root:after": {
    borderBottom: "2px solid #777777",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#777777",
  },
};
