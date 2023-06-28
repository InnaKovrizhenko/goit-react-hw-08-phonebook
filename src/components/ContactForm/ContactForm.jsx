import { useState } from 'react'
import { FormForContact, AddButton, Span1, Span2, Input } from './ContactForm.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contact-selector';
import { addContact } from 'redux/contacts/contact-operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);

  const onInputName = event => {
    setName(event.currentTarget.value);
  };
  const onInputNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const contact = {
      name: name,
      number: number,
    };

    if (allContacts.find((i) => i.name === name)) {
      toast.info(`${name} is already in contacts`);
        setName('');
        setNumber('');
        return;
    } else if (allContacts.find((i) => i.number === number)) {
      toast.info(`${number} is already in contacts`);
        setName('');
        setNumber('');
        return;
    }

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

    return (
      <FormForContact onSubmit={onSubmitForm} action="">
        <label>
          <Span1>Name</Span1>
          <Input
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я\s\-']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onInputName}
          />
        </label>
        <label>
          <Span2>Number</Span2>
          <Input
            value={number}
            type="tel"
            name="number"
            pattern="^[0-9\-]+$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses"
            required
            onChange={onInputNumber}
          />
        </label>
        <AddButton type="submit">Add contact</AddButton>
        <ToastContainer />
      </FormForContact>
    );
  }


