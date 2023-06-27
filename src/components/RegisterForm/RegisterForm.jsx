import { useDispatch } from 'react-redux';
import { Form, TextFiled, Label, Btn, Title, Container } from './RegisterForm.styled';
import { register } from 'redux/auth/auth-operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmitForm = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(register({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    }))
  }

  return (
    <Container>
      <Title>Registration form</Title>
      <Form onSubmit={onSubmitForm} autoComplete="off">
        <Label>Your Name
          <TextFiled type="text" name="name"/>
        </Label>
        <Label>Your Email
          <TextFiled type="email" name="email"/>
        </Label>
        <Label>Your Password
          <TextFiled type="password" name="password"/>
        </Label>
        <Btn type="submit">Register</Btn>
      </Form>
    </Container>
  );
};
