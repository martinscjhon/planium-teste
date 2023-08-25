import { styled } from 'styled-components'

interface IButtonStyle {
    background: string
    width: string
    height: string
}
export const ButtonComponent = styled.button<IButtonStyle>`
    background-color: ${props => props.background};
    width: ${props => props.width};
    height: ${props => props.height};

`

interface IImageStyle {
    width: string
    height: string
}
export const ImageComponent =styled.img<IImageStyle>`
    width: ${props => props.width};
    height: ${props => props.height};
`

interface ITextStyle {
    color: string
    size: string
    weight: number
}
export const TextComponent = styled.span<ITextStyle>`
    color: ${props => props.color};
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
`;