import styled from 'styled-components'
import { Link as LinkS} from 'react-scroll'

export const SobrenosContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background: #fff;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 840px){
        flex-wrap: wrap;
    }
`

export const Imagem = styled.img`
    width: 500px;
    height: 500px;
    margin-left: 2rem;
    padding: 20px;
    border-radius: 15em;

    @media screen and (max-width: 1215px){
        width: 300px;
        height: 300px;
    }
`

export const SobrenosContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 8em;

    @media screen and (max-width: 1200px){
        margin-left: 0px;
    }
    
`

export const Parag = styled.p`
    color: #008C00;
    font-size: 25px;
    font-weight: bold;
    font-family: sans-serif;

    @media screen and (max-width: 1200px){
        font-size: 20px;
    }
`

export const SobrenosH1 = styled.h1`
    text-align: center;
    color: #008000;
    margin-bottom:50px;
    font-family: 'Redressed', cursive;
    font-size: 80px;

    @media screen and (max-width: 1200px){
        font-size: 60px;
    }
`

export const SobrenosButtom = styled(LinkS)`
    padding:14px 18px;
    background: #008000;
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

    @media screen and (max-width: 1250px){
        font-size: 0.9rem;
        width: 35%;
    }
`

export const SobrenosH2 = styled.h1`
    text-align: center;
    color: #000;
    margin-top: 30px;
    font-family: 'Redressed', cursive;
    font-size: 40px;

    @media screen and (max-width: 1200px){
        font-size: 30px;
    }
`

