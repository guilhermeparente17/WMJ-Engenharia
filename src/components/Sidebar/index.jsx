import React from 'react'
import { 
    SidebarContainer, 
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    NavbarImage
} from './SidebarElements'
import { FaTimes } from 'react-icons/fa'

const index = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} >
                <Icon onClick={toggle}>
                    <FaTimes />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="/"><NavbarImage src="https://i.ibb.co/0DXg0CV/logo1.png" /></SidebarLink>
                        <SidebarLink to="/" onClick={toggle}>Serviços</SidebarLink>
                        <SidebarLink to="/" onClick={toggle}>Sobre nós</SidebarLink>
                        <SidebarLink to="/" onClick={toggle}>Contato</SidebarLink>
                        <SidebarLink><SidebarRoute to="/">Faça um orçamento</SidebarRoute></SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>

        </>
    )
}

export default index
