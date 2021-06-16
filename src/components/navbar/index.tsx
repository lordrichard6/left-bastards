import React from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'

import { NavLogo } from './navLogo'
import { NavItems } from './navItems'

export function Navbar() {
    return (
        <NavbarContainer>
            <NavLogo />
            <NavItems />
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-row
        items-center
        justify-between
        px-4
        mt-2
    `}
`;


