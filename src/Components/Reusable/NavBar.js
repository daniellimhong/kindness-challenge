import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import styled from 'styled-components';

const NavContainer = styled.div`
    width: 100%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0 20px 0;
`
const Ul = styled.ul`
    display: flex;
    list-style-type: none
`

const List = styled.li`
    margin-right: 4rem;
`

const StyledLink = styled(Link)`
    color: black;
    font-size: 24px;
    text-decoration: none;
    transition: ease 0.2s;

    &:hover{
        color: blue; //change
        cursor: pointer;
        transform: scale(1.05); //change
    }

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Logo = styled.img`
    width: 500px;
    height: 100px;

    &:hover{
        cursor: pointer;
    }
`

const NavBar = () => {

    return (
        <NavContainer>
            <Link to="/"><Logo src={logo} alt="logo"/></Link>
            <Ul>
                <List>
                    <StyledLink to="/inspiration">Inspiration</StyledLink>
                </List>
                <List>
                    <StyledLink to="/resources">Find Supplies</StyledLink>
                </List>
                <List>
                    <StyledLink to="/team">Team</StyledLink>
                </List>

            </Ul>
        </NavContainer>
    )
}

export default NavBar;