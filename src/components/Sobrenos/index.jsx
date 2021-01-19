import React from 'react'
import {
    Imagem, Parag, SobrenosContainer, SobrenosH1, SobrenosContent, SobrenosButtom, SobrenosH2
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
                    Quem Somos
                </SobrenosH1>
                <Parag>
                Somos uma organização que executa serviços dentro do mais alto padrão de qualidade, 
                segurança e respeito ao meio ambiente, 
                visando promover a satisfação dos clientes nos serviços prestados.
                </Parag>

                <SobrenosH2>
                    MISSAO
                </SobrenosH2>

                <Parag fonte={"sans-serif"}>
                Executar serviços dentro do mais alto padrão de qualidade, 
                segurança e respeito ao meio ambiente agindo com responsabilidade 
                social, visando promover a satisfação dos clientes nos serviços 
                prestados e proporciona a valorização de nossos colaboradores.
                </Parag>

                <SobrenosH2>
                    VISAO
                </SobrenosH2>

                <Parag>
                Ser reconhecida como empresa líder em nossas áreas de atuação,
                 sendo referencia em terceirização de serviços no 
                 Nordeste atuando com foco na sustentabilidade, 
                 responsabilidade e competitividade para nossos clientes.
                </Parag>

                <SobrenosH2>
                    VALORES
                </SobrenosH2>

                <Parag>
                    Ética, segurança, valorização dos colaboradores, honestidade, planejamento, comprometimento, responsabilidade, transparência e foco no cliente.
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
