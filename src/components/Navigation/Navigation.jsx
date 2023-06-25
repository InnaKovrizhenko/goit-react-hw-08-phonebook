// import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from "components/AuthNav/AuthNav";
import { HomeLink } from './Navigation.styled';


export const Navigation = () => {
  return (
    <>
      <HomeLink to="/">Home</HomeLink>
      {/* <UserMenu /> */}
      <AuthNav/>

    </>
  );
};

