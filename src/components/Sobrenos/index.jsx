import React from 'react'
import {
    Imagem, Parag, SobrenosContainer, SobrenosH1, SobrenosContent, SobrenosButtom
} from './SobrenosElements'

//import enginner from '../../images/enginner2.svg'
import imagem from "../../images/foto3/lampada.png"

const Sobrenos = () => {
    return (
        <>
        <SobrenosContainer>
            <Imagem src={imagem} />
            <SobrenosContent>
                <SobrenosH1>
                    Lorem Ipsum
                </SobrenosH1>
                <Parag>
                        Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of type and 
                    scrambled.
                </Parag>
                <SobrenosButtom>
                    Saiba mais
                </SobrenosButtom>
            </SobrenosContent>

        </SobrenosContainer>
        </>
    )
}

export default Sobrenos
