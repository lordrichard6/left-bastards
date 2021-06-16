import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

import WhiteBG from '../../assets/img/webb.png'
import BlackBG from '../../assets/img/webb-dark.png'
import Logo from '../../assets/img/logo_gold_noTitle_06.21.png'

export function Card() {
    return (
        <CardContainer>
            <UpperSection>
                <img src={Logo} alt="lol" />
                <h1>Paulo Reizinho</h1>
                <h2>"Bigger the challenge greater the reward"</h2>
            </UpperSection>
            <UnderSection>
                <IconsContainer>
                    <Icon
                        href="https://www.linkedin.com/in/pauloreizinho/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </Icon>
                    <Icon
                        href="https://www.linkedin.com/in/pauloreizinho/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </Icon>
                </IconsContainer>
                <SmallText>
                    Gaviao
                </SmallText>
            </UnderSection>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    /* width: 500px; */
    min-width: 450px;
    height: 300px;
    ${tw`
        w-1/2
        bg-cover
        m-4
        rounded-2xl
    `}
`

const UpperSection = styled.div`
    height: 220px;
    background: linear-gradient( rgba(176, 176, 176, 0.6), rgba(176, 176, 176, 0.6)), url(${WhiteBG});
    ${tw`
        w-full
        rounded-t-2xl
        flex
        flex-col
        justify-center
        flex-wrap
        content-center
    `}
    img {
        width: 100px;
        height: auto;
        ${tw`
            self-center
        `}
    }
    h1 {
        ${tw`
            text-4xl
            font-bold
            tracking-tighter
            self-center
        `}
    }
    h2 {
        ${tw`
            w-1/2
            text-gray-500
            text-xl
            text-center
            self-center
        `}
    }
`

const UnderSection = styled.div`
    height: 80px;
    background:linear-gradient( rgba(55, 55, 55, 0.8), rgba(55, 55, 55, 0.8)), url(${BlackBG});
    color: #CAA82F;
    ${tw`
        w-full
        rounded-b-2xl
        flex
        flex-row
        flex-wrap
        justify-between
        content-center
    `}
`

const IconsContainer = styled.div`
    ${tw`
        flex
        self-center
        text-5xl
        mx-10
    `}
`

const Icon = styled.a`
    ${tw`
        mx-2
    `}
`

const SmallText = styled.p`
    ${tw`
        self-center
        text-2xl
        mx-10
    `}
`