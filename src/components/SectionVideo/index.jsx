import React from 'react'
import Video from '../../Videos/Video.mp4'
import {
    SectionVideoContainer,
    SectionVideoBG,
    VideoBG,
    SideVideoContainer,
    SectionVideoH1,
    SideVideoP,
    SobrenosButtom
} from './SectionVideoElements'

const SectionVideo = () => {
    return (
        <div>
            <SectionVideoContainer>
                <SectionVideoBG>
                    <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
                </SectionVideoBG>
                <SideVideoContainer>
                    <SectionVideoH1>Conheça o futuro da<SectionVideoH1 color="#25C908">Engenharia</SectionVideoH1></SectionVideoH1>
                    <SideVideoP>
                        Saiba mais sobre meus serviços ou 
                        consulte um orçamento personalizado 
                        de sua preferência!
                    </SideVideoP>
                    <SobrenosButtom>
                        Entre em Contato
                    </SobrenosButtom>
                </SideVideoContainer>
            </SectionVideoContainer>
        </div>
    )
}

export default SectionVideo
