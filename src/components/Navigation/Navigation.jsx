import { AuthNav } from "components/AuthNav/AuthNav";
import { HomeLink } from './Navigation.styled';
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/auth-selectors";
import { UserMenu } from "components/UserMenu/UserMenu";


export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <HomeLink to="/">Home</HomeLink>
      {isLoggedIn && <HomeLink to='/contacts'>Contacts</HomeLink>}
      {isLoggedIn ? <UserMenu /> : <AuthNav/>}
    </>
  );
};

