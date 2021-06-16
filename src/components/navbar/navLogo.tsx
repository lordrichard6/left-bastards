import React from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'

import Logo from '../../assets/img/logo_gold_noTitle_06.21.png'

export function NavLogo() {
    return (
        <LogoContainer>
            <Image>
                <img src={Logo} alt="logo" />
            </Image>
            <LogoText>Left Bastards</LogoText>
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
    `}
`;

const Image = styled.div`
    width: auto;
    ${tw`
        h-9
        mr-2
    `}

    img {
        width: auto;
        height: 100%;
    }
`;

const LogoText = styled.div`
    color: #CAA82F;
    ${tw`
        text-3xl
        font-semibold
        uppercase
        tracking-widest
    `}

`;