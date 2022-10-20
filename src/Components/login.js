import { Form, Field } from 'react-final-form'
import { validateLogin } from "../validator";
import { InputField } from "../fields";

export const LoginComponent = props => {
  const { submit, redirectTo } = props;

  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 h-100'>
        <h1>Login</h1>
        <Form
            onSubmit={data => submit(data)}
            validate={validateLogin}
            initialValues={{email: "ket@gmail.com"}}
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
                    <div className="mt-3 d-flex justify-content-between">
                        <button type="submit" className="btn btn-success" disabled={submitting || invalid}>
                            Submit
                        </button>
                        <button
                            type="button"
                            className='btn btn-outline-secondary'
                            onClick={() => redirectTo()}>
                            Voltar
                        </button>
                    </div>
                </form>
            )}
        />
    </div>
  )
}

