import styled from 'styled-components'
import { Link as LinkS} from 'react-scroll'

export const SobrenosContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background: #000;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 840px){
        flex-wrap: wrap;
    }
`

export const Imagem = styled.img`
    width: 600px;
    height: 600px;
    margin-left: 2rem;
    padding: 20px;

    @media screen and (max-width: 740px){
        width: 300px;
        height: 300px;
    }
`

export const SobrenosContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const Parag = styled.p`
    color: #fff;
    font-size: 25px;

    @media screen and (max-width: 740px){
        font-size: 15px;
    }
`

export const SobrenosH1 = styled.h1`
    text-align: center;
    color: #fff;
    margin:20px;
`

export const SobrenosButtom = styled(LinkS)`
    padding:14px 18px;
    background: #005900;
    border-radius:24px;
    text-align: center;
    color: #fff;
    width: 30%;
    color: color;
    cursor: pointer;
    font-size: 1.3rem;
    transition: 0.4s ease-in-out;
    margin-top: 70px;

    &:hover{
        transition: 0.4s ease-in-out;
        background: #008C00;
    }

    @media screen and (max-width: 840px){
        font-size: 0.9rem;
    }
`

