import React from 'react'
import { NavbarContainer, 
    NavbarLink, 
    NavbarImage,
    NavBarList,
    NavbarItem,
    Buttom,
    MobileIcon,
    NavButton
} from './NavbarElements'
import {FaBars} from 'react-icons/fa'

const Navbar = ({ toggle}) => {
    return (
        <>
            <NavbarContainer>
                <NavbarLink to="/"><NavbarImage src="https://i.ibb.co/0DXg0CV/logo1.png" /></NavbarLink>
                <NavBarList>
                    <NavbarItem><NavbarLink to="servicos">Serviços</NavbarLink></NavbarItem>
                    <NavbarItem><NavbarLink to="/">Sobre nós</NavbarLink></NavbarItem>
                    <NavbarItem><NavbarLink to="/">Contato</NavbarLink></NavbarItem>
                </NavBarList>
                <NavButton>
                    <Buttom to="/">Faça um Orçamento</Buttom>
                </NavButton>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
            </NavbarContainer>
        </>
    )
}

export default Navbar
