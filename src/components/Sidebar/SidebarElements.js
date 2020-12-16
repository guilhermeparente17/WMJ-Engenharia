import styled from 'styled-components'
import { Link as LinkS} from 'react-scroll'

export const SidebarContainer = styled.div`
    display: grid;
    align-items: center;
    background: rgba(0,0,0,0.9);
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    transition: 0.2s ease-in-out;
    z-index: 999;
    opacity: ${({ isOpen}) => isOpen ? "100%" : "0"};
    top: ${({ isOpen}) => isOpen ? "0" : "-100%"};
`

export const Icon = styled.div`
    color: #fff;
    font-size: 2rem;
    position: absolute;
    background: transparent;
    top: 1.2rem;
    right: 1.4rem;
    cursor: pointer;
`

export const SidebarWrapper = styled.div`
    color: #FFF;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align:center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 100px);
    }
`   

export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color:#E8D4D1;
        transition: 0.4s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkS)`
    border-radius: 50px;
    background:#008000;
    white-space: nowrap;
    padding: 16px 22px;
    color: #FFF;
    font-size: 16px;
    outline: none;
    border:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #008C00;
    }
`
export const NavbarImage = styled.img`
    width: 60px;
    height: 60px;
`



