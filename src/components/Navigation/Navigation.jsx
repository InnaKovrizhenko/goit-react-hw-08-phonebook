import { NavLink } from "react-router-dom";
// import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from "components/AuthNav/AuthNav";

export const Navigation = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      {/* <UserMenu /> */}
      <AuthNav/>


    </>
  );
};

