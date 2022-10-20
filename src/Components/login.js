import { Form, Field } from 'react-final-form'
import { validateLogin } from "../validator";
import { InputField } from "../fields";

export const LoginComponent = props => {
  const { submit, redirectTo } = props;

  return (
    <>
        <h1>Login</h1>
        <Form
            onSubmit={data => submit(data)}
            validate={validateLogin}
            initialValues={{email: "ket@gmail.com"}}
            render={({ handleSubmit, submitting, pristine, values }) => (
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
                    <div>
                        <label>Senha</label>
                        <Field
                            name="password"
                            component={InputField}
                            type="password"
                            placeholder="Insira sua senha"
                        />
                    </div>
                    <div className="buttons">
                        <button type="submit" disabled={submitting || pristine}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={() => redirectTo()}>
                            Voltar
                        </button>
                    </div>
                </form>
            )}
        />
    </>
  )
}

