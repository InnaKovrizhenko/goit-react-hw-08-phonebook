import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilteredContact } from 'redux/contacts/contact-selector';
import { Deletebutton, Span, ListContacts } from './ContactList.styled';
import { deleteContact } from 'redux/contacts/contact-operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contactUser = useSelector(getContacts);
  const filteredUser = useSelector(getFilteredContact);
  const normalizeFilteredUser = filteredUser.toLowerCase();
  const visibleListContacts = contactUser.filter(el =>
    el.name.toLowerCase().includes(normalizeFilteredUser)
  );

    return (
      <ul>
        {visibleListContacts.map(({ id, number, name }) => {
          return (
            <ListContacts key={id}>
              <Span>
                {name}: {number}
              </Span>
              <Deletebutton type="button" onClick={() => dispatch(deleteContact(id))}>
                Del
              </Deletebutton>
            </ListContacts>
          );
        })}
      </ul>
    );
  };


