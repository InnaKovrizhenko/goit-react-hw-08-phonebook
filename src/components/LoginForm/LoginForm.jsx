// import { useDispatch } from 'react-redux';
// import authOperations from 'redux/auth/auth-operations';
import { Form, TextFiled, Label, Btn } from './LoginForm.styled';

export const LoginForm = () => {
  // const dispatch = useDispatch();

  const onSubmitForm = event => {
    event.preventDefault();

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