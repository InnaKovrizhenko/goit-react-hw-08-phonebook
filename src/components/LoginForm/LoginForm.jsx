import { useDispatch } from 'react-redux';
import { Form, TextFiled, Label, Btn } from './LoginForm.styled';
import { logIn } from 'redux/auth/auth-operations';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmitForm = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(logIn({
      email: form.elements.email.value,
      password: form.elements.password.value,
    }))

  }

  return (
    <div>
      <h1>Login form</h1>
      <Form
      onSubmit={onSubmitForm}
      autoComplete="off">
        <Label>
          Your Email
          <TextFiled
            type="email"
            name="email"
          />
        </Label>

        <Label>
          Your Password
          <TextFiled
            type="password"
            name="password"
          />
        </Label>

        <Btn type="submit">Login</Btn>
      </Form>
    </div>
  );
};