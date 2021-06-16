import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

export function NavItems() {

    return (
        <ListContainer>
            <NavItem>
                <a href="/#">Home</a>
            </NavItem>
            <NavItem>
                <a href="/#">members</a>
            </NavItem>
            <NavItem>
                <a href="/#">store</a>
            </NavItem>
            <NavItem>
                <a href="/#">blog</a>
            </NavItem>
        </ListContainer>
    )
}

const ListContainer = styled.div`
    color: #CAA82F;
    ${tw`
        flex
        list-none
    `}
`;

const NavItem = styled.div`
    ${tw`
        text-xs
        md:text-xl
        font-black
        uppercase
        tracking-wide
        cursor-pointer
        mx-3
        transition
        duration-300
        ease-in-out
        hover:text-white
    `}
`;