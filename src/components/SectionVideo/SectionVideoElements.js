import styled from 'styled-components'
import { Link as LinkS} from 'react-scroll'

export const SectionVideoContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    color: #FFF;
    justify-content:center;
    padding: 0 30px;
    height: 550px;
    position: relative;
    z-index:1;

    :before{
        content: '';
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: linear-gradient(180deg, rgba(0,0,0,0.5) 30%,
        rgba(0,0,0,0.8) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index:2;
    }
`

export const SectionVideoBG = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBG = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit:cover;
    object-fit:cover;
    background: #232a34;
`

export const SideVideoContainer = styled.div`
    z-index: 3;

    margin-top: 110px;
    max-width:1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items:center;
`

export const SectionVideoH1 = styled.h1`
    color: ${({ color }) => color ? color : "#FFF"};
    font-size: 68px;
    text-align: center;
    text-shadow: 4px 2px 4px #000000;
    @media screen and (max-width: 760px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 34px;
    }
`

export const SideVideoP = styled.p`
    margin-top: 24px;
    color: #FFF;
    text-shadow: 2px 2px 4px #000000;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 760px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const SobrenosButtom = styled(LinkS)`
    margin-top: 50px;
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
`