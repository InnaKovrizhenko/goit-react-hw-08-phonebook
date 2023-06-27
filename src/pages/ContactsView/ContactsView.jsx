import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contact-operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { getLoader } from 'redux/contacts/contact-selector';
import { Container, Box, Box2 } from './ContactsView.styled'
import { ThreeDots } from  'react-loader-spinner'

export const ContactsView = () => {
  const dispatch = useDispatch();
  const loader = useSelector(getLoader);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
    <Container>
      <Box>
      <ContactForm />
      <Filter />
      </Box>
      <Box2>
      {loader && <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'ctnter', }}>
        <ThreeDots height="80" width="80" radius="9"color="#FFFFFF"/>
        </div>}
      <ContactList />
      </Box2>
    </Container>
    </>
  );
};
