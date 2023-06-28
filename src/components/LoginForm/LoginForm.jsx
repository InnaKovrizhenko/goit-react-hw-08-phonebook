import { useDispatch } from 'react-redux';
import { Form, TextFiled, Label, Btn, Title, Container, InRegistrer } from './LoginForm.styled';
import { logIn } from 'redux/auth/auth-operations';
import { ToastContainer } from 'react-toastify';

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
    <Container>
      <Title>Login form</Title>
      <Form onSubmit={onSubmitForm} autoComplete="off">
        <Label>Your Email
          <TextFiled type="email" name="email" required/>
        </Label>
        <Label>Your Password
          <TextFiled type="password" name="password" required/>
        </Label>
        <Btn type="submit">Log In</Btn>
        <InRegistrer to="/register">
          Don't have an account? Sign Up
        </InRegistrer>
        <ToastContainer />
      </Form>
    </Container>
  );
};