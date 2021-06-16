import styled from 'styled-components'
import tw from 'twin.macro'

import Logo from '../../assets/img/logo_gold_noTitle_06.21.png'


export function TopSection() {
    return (
        <PageContainer>
            <LeftContainer>
                <Title>About Us</Title>
                <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ullamcorper sed duis tristique mattis mauris, 
                vitae non adipiscing. Faucibus sem rhoncus amet aliquet 
                feugiat. Et tincidunt molestie turpis ac sed. 
                Tortor nulla tincidunt ultricies bibendum sit pulvinar 
                </Description>
            </LeftContainer>
            <RightContainer>
                <LogoContainer>
                    <img src={Logo} alt="logo" />
                </LogoContainer>
            </RightContainer>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    ${tw`
        flex
        flex-row
        w-full
        h-full
        items-center
        overflow-x-hidden
        my-12 
    `}
`

const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        text-white
    `}
`

const Title = styled.h1`
    ${tw`
       self-start
       uppercase
       tracking-widest
       text-5xl
       font-bold
       mb-8
    `}
`

const Description = styled.p`
    ${tw`
        text-left
        text-xl
        pr-16
    `}
`

const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `}
`

const LogoContainer = styled.div`
    ${tw`
        w-full
        h-auto
    `}
`