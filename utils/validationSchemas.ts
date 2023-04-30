import * as Yup from "yup";

export const passwordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .matches(/[A-Z]/)
    .matches(/[a-z]/)
    .matches(/\d/)
    .matches(/[$&+,:;=?@#|'<>.^*()%!-]/)
    .min(8)
    .required(),
});

export const emailValidationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

export const nipValidationSchema = Yup.object().shape({
  nip: Yup.string().required().min(10).max(10),
});

export const positionValidationSchema = Yup.object().shape({
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

export const phoneValidationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\d{9}$/)
    .required(),
});
