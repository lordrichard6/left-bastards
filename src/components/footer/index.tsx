import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Logo from '../../assets/img/logo_black_06.21.png'

export function Footer() {
    return (
        <FooterContainer>
            <InnerContainer>
                <SectionContainer>
                    <img src={Logo} alt="logo" />
                </SectionContainer>
                <SectionContainer>
                    <SectionTitle>info</SectionTitle>
                    <IconContainer>
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
                        <Icon
                            href="https://www.linkedin.com/in/pauloreizinho/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faYoutubeSquare} />
                        </Icon>
                    </IconContainer>
                </SectionContainer>
                <SectionContainer>
                    <SectionTitle>contact</SectionTitle>
                    <HorizontalContainer>
                        <RoundIcon>
                            <ContactIcon icon={faEnvelope} />
                        </RoundIcon>
                        <SmallText>leftbastards@gmail.com</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
            </InnerContainer>
            <BottomContainer>
                <CopyrightText>
                    Copyright &copy; {new Date().getFullYear()} Paulo Lopes Reizinho.
                    All rights reserved.
                </CopyrightText>
            </BottomContainer>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    background-color: #CAA82F;
    ${tw`
        flex
        flex-col
        w-full
        items-center
        justify-center
        md:px-32
    `}
`

const InnerContainer = styled.div`
    ${tw`
        flex
        flex-col
        md:flex-row
        w-full
        h-full
        flex-wrap
    `}
`

const SectionContainer = styled.div`
    ${tw`
        md:w-1/3
        flex
        flex-col
        items-center
        justify-center
        my-2
    `}

    img {
        ${tw`
            h-36
            w-auto
            pr-2
        `}
    }
`

const SectionTitle = styled.h1`
    ${tw`
        text-4xl
        font-black
        tracking-wider
        mb-2
        uppercase
    `}
`

const IconContainer = styled.div`
    ${tw`
        flex
        justify-center
        w-full
        text-5xl
        pt-2
    `}
`

const Icon = styled.a`
    ${tw`
        mx-2
    `}
`

const HorizontalContainer = styled.div`
    ${tw`
        flex
        w-full
        justify-start
        items-center
        ml-24
    `}
`

const RoundIcon = styled.span`
    background-color: #000000;
    ${tw`
        w-9
        h-9
        rounded-full
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
    `}
`

const SmallText = styled.p`
    ${tw`
        text-xl
        tracking-wider
    `}
`

const ContactIcon = styled(FontAwesomeIcon)`
    color: #CAA82F;
    ${tw`
        
    `}
`

const BottomContainer = styled.div`
    ${tw`
        
    `}
`

const CopyrightText = styled.small`
    font-size: 12px;
`