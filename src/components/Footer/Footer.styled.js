import styled from 'styled-components';

export const FooterStyled = styled.footer`
display: flex;
align-items: center;
justify-content: space-between;
padding: 15px;

border-top: 2px solid;
border-image: linear-gradient(to right, #ffffff, #90acaa, #6A9393, #ffffff ) 47% 0%;
color: white;
`
export const IconLink = styled.a`
  padding: 10px;
  color: white;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: 	#FF967E;
  }
`;

