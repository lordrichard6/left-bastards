import styled from 'styled-components'
import tw from 'twin.macro'

import { TopSection } from './topSection'
import {Navbar} from '../../components/navbar'

export function Homepage() {
    return (
        <PageContainer>
            <Navbar />
            <TopSection />
        </PageContainer>
    )
}

const PageContainer = styled.button`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
        md:px-32
    `}
`