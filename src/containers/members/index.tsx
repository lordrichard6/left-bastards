import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Card } from '../../components/card'
import Shapes from '../../assets/img/bg_shapes.svg'

export function Members() {
    return (
        <SectionContainer>
            <SectionTitle>members</SectionTitle>
            <CardContainer>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <BgShape src={Shapes} alt="shapes" />
            </CardContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    ${tw`
        min-h-screen
        w-full
        flex
        flex-col
        md:px-32
        relative
    `}
`;

const SectionTitle = styled.h1`
    ${tw`
        text-white
        text-5xl
        font-black
        uppercase
        tracking-widest
        my-8
    `}
`;

const CardContainer = styled.div`
    ${tw`
        w-full
        grid
        grid-cols-2
        justify-items-center
        2xl:grid-cols-3
        
    `}
`;

const BgShape = styled.img`
    z-index: -1;
    ${tw`
        absolute
        w-screen
        overflow-visible
    `}
`;