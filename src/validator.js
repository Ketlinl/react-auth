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

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};