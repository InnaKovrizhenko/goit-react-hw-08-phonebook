
import { HomeLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <div>
      <HomeLink to="/register">Sign In</HomeLink>
      <HomeLink to="/login">Log In</HomeLink>
    </div>
  );
};
