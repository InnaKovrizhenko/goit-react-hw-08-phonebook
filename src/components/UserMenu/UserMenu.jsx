import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import { clearContacts } from 'redux/contacts/contact-operations';
import { Span, LogButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <div>
      <Span>Welcome, {userName}</Span>
      <LogButton type="button" onClick={() => {dispatch(logOut()); dispatch(clearContacts)}}>
        Logout
      </LogButton>
    </div>
  );
};