import { FooterStyled, IconLink } from "./Footer.styled";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Footer = () => {

    return (
      <>
      <FooterStyled>
      <p>© 2023 | Created by Inna Kovrizhenko</p>
      <div>
        <IconLink
          href="https://www.linkedin.com/in/inna-kovrizhenko-192023271/"
          target="_blank">
          <FaLinkedin size={30} />
        </IconLink>
        <IconLink href="https://github.com/InnaKovrizhenko" target="_blank">
          <FaGithub size={30} />
        </IconLink>
        </div>
      </FooterStyled>
      </>
    );
  };