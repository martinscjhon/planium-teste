import { styled } from 'styled-components'

interface IButtonStyle {
    background: string
    width: string
    height: string
    size: string
}
export const ButtonComponent = styled.button<IButtonStyle>`
    background-color: ${props => props.background};
    width: ${props => props.width};
    height: ${props => props.height};
    border: none;
    font-size: ${props => props.size};

    :disabled {
        background-color: var(--gray) !important;
        cursor: not-allowed;
    }

`

interface IImageStyle {
    width: string
    height: string
}
export const ImageComponent = styled.img<IImageStyle>`
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
    font-family: "Nunito";
`;


export const InputComponent = styled.div`
    display: flex;
    flex-direction: column !important;    
    gap: 6px;

    label {
        font: 400 0.857rem var(--font);
        color: var(--gray);         
    }

    input {
        height: 2.5rem;
        padding: 0.438rem 1rem;
        display: block;
        width: 100%;
        font-size: 13px;
        font-weight: 400;
        line-height: 1.45;
        outline: none;
        font-family: var(--font);
        background-color: var(--light);
        background-clip: padding-box;
        border-radius: 0.357rem;
        color: var(--gray);   
        border: 1px solid var(--gray-100);                
    }
`

export const SelectComponent = styled.div`
    display: flex;
    flex-direction: column !important;
    gap: 6px;
    width: 100%;

    label {
        font: 400 0.857rem var(--font);
        color: var(--gray);         
    }

    option {
        color: var(--dark);
    }

    select {
        display: block;
        width: 100%;
        height: 2.5rem;
        padding: 0.438rem 1rem;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.45;
        cursor: pointer;
        outline: none;
        font-family: var(--font);
        color: var(--gray);   
        background-color: var(--light);
        background-clip: padding-box;    
        border-radius: 0.357rem;
        border: 1px solid var(--gray-100);
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

        option:nth-child(1) {
        color: var(--gray);
        font-family: var(--font);
        }    
    }
`;