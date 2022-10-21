import styled from 'styled-components';
import { Form, Field } from 'react-final-form'
import { validateLogin } from "../validator";
import { InputField } from "shared/fields";

export const LoginComponent = props => {
  const { submit } = props;

  return (
  <Container className="container">
    <div className='d-flex flex-column justify-content-center align-items-center w-100 h-100'>
      <h1>Login</h1>
      <Form
        onSubmit={data => submit(data)}
        validate={validateLogin}
        initialValues={{email: "fulano@gmail.com"}}
        render={({ handleSubmit, submitting, invalid }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <Field
                name="email"
                component={InputField}
                type="text"
                placeholder="Insira seu email"
              />
            </div>
            <div className='mt-3'>
              <label>Senha</label>
              <Field
                name="password"
                component={InputField}
                type="password"
                placeholder="Insira sua senha"
              />
            </div>
            <button type="submit" className="btn btn-success mt-3" disabled={submitting || invalid}>
              Submit
            </button>
          </form>
          )}
      />
    </div>
  </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
