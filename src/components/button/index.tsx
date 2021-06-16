import styled from 'styled-components'
import tw from 'twin.macro'

export function Button() {
    return (
        <ButtonContainer>
            enter
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button`
    background-color: #CAA82F;
    ${tw`
        uppercase
        font-bold
        tracking-wider
        rounded-md
        px-4
        py-1
        my-4
    `}
`