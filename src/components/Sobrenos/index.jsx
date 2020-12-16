import React from 'react'
import {
    Imagem, Parag, SobrenosContainer, SobrenosH1, SobrenosContent, SobrenosButtom
} from './SobrenosElements'

import enginner from '../../images/enginner2.svg'

const Sobrenos = () => {
    return (
        <>
        <SobrenosContainer>
            <Imagem src={enginner} />
            <SobrenosContent>
                <SobrenosH1>
                    Lorem Ipsum
                </SobrenosH1>
                <Parag>
                        Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was 
                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions 
                    of Lorem Ipsum.
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
