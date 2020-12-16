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
                    <SectionVideoH1>Meet the Future of <SectionVideoH1 color="#25C908">Engineering</SectionVideoH1></SectionVideoH1>
                    <SideVideoP>
                        Find out more about my services
                        or consult a personalized 
                        quote you like!
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
