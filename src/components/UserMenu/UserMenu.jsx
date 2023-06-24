import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUserName);

  return (
    <div>
      <span> Welcome</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
};