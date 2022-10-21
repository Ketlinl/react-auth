import { validateEmail } from "shared/validators";

export const validateLogin = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "O email é obrigatório.";
  }

  if (!validateEmail(values.email)) {
    errors.email = "O email está inválido!";
  }

  if (!values.password) {
    errors.password = "A senha é obrigatória.";
  }

  return errors;
};
