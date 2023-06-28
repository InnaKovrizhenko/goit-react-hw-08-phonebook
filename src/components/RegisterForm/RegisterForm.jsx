import { useDispatch } from 'react-redux';
import { Form, TextFiled, Label, Btn, Title, Container } from './RegisterForm.styled';
import { register } from 'redux/auth/auth-operations';
import { ToastContainer, toast } from 'react-toastify';

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

    if (form.elements.password.value.length < 7) {
      toast.info(`Password must contain at least 7 characters`);
        return;
    }
  }

  return (
    <Container>
      <Title>Registration form</Title>
      <Form onSubmit={onSubmitForm} autoComplete="off">
        <Label>Your Name
          <TextFiled type="text" name="name" required/>
        </Label>
        <Label>Your Email
          <TextFiled type="email" name="email" required/>
        </Label>
        <Label>Your Password
          <TextFiled type="password" name="password" required/>
        </Label>
        <Btn type="submit">Sign In</Btn>
      </Form>
      <ToastContainer />
    </Container>
  );
};
