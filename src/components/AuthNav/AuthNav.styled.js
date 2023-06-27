import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const HomeLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
    margin-left: 25px;

    &.active {
        color: 	#FF967E;   
    }
`