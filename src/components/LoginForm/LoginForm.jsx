import { useDispatch } from 'react-redux';
import { Form, TextFiled, Label, Btn, Title, Container } from './LoginForm.styled';
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
    <Container>
      <Title>Login form</Title>
      <Form onSubmit={onSubmitForm} autoComplete="off">
        <Label>Your Email
          <TextFiled type="email" name="email"/>
        </Label>
        <Label>Your Password
          <TextFiled type="password" name="password"/>
        </Label>
        <Btn type="submit">Sign In</Btn>
      </Form>
    </Container>
  );
};