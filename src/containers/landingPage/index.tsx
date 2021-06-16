import styled from 'styled-components'
import tw from 'twin.macro'

import {Button} from '../../components/button'
import Logo from '../../assets/img/logo_gold_06.21.png'

export function LandingPage() {
    return (
        <PageContainer>
            <LogoContainer>
                <img src={Logo} alt="logo" />
            </LogoContainer>
            <Button />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`

const LogoContainer = styled.div`
    ${tw`
        w-1/2
        animate-pulse
    `}
`