import styled from 'styled-components';

export const Container = styled.div`
text-align: center;
margin-bottom: 20px;
`
export const Form = styled.form`
  padding: 20px;
  margin: 20px;
`;

export const Title = styled.h1`
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 30px;
    margin-left: 15px;

    &.active {
        color: 	#FF967E;   
    }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 20px;

`;

export const TextFiled = styled.input`
  width: 300px;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Btn = styled.button`
color: white;
background-color: #FF967E;
font-weight: 500;
font-size: 18px;
line-height: 1.62;
cursor: pointer;

border: 1px solid transparent;
border-radius: 20px;
padding: 6px 15px;
margin-top: 20px;
width: 200px;
text-align: center;
transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1),
            background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus {
    font-weight: 700;
    background-color: #FF967E;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12),
                0px 1px 2px rgba(0, 0, 0, 0.08),
                0px 3px 1px rgba(0, 0, 0, 0.1);
}`;