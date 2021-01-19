import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const NavbarContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    background: rgba(0,0,0,0.5); /*linear-gradient(to right, #006400, #083B05);*/
    z-index: 999;
    position: absolute;
    top:0;
    z-index:10;
    /*box-shadow: 0px 5px 50px #000000; */

    @media screen and (max-width: 740px){
        justify-content: space-between;
    }
    

`

export const NavbarLink = styled(LinkS)`
    color: #fff;
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        color: #008C00;
        transition: 0.4s ease-in-out;
    }
`

export const NavbarImage = styled.img`
    width: 60px;
    height: 60px;
`

export const NavBarList = styled.ul`
    display: flex;
    margin-left: 100px;

    @media screen and (max-width: 740px){
        display: none;
    }
    
`

export const MobileIcon = styled.div`

display: none;
@media screen and (max-width: 740px){
        display: block;
        color: #fff;
        padding: 5px;
        font-size: 2.5rem;
        cursor: pointer;
    }
    
`

export const NavbarItem = styled.li`
    margin-left: 40px;
    font-family: 'Lato', sans-serif;
`

export const Buttom = styled(LinkS)`
    padding:14px 18px;
    background: #005900;
    border-radius:24px;
    color: color;
    cursor: pointer;
    font-size: 0.9rem;
    transition: 0.4s ease-in-out;

    &:hover{
        transition: 0.4s ease-in-out;
        background: #008C00;
    }

    @media screen and (max-width: 740px){
        display: none;
    }


`

export const NavButton = styled.div`
    color: #fff;
`
