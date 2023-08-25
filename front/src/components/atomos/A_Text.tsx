import { FC } from 'react'
import { TextComponent } from './style'
import { ITextProps } from '../../utils/interface/components/IText'

const A_Text: FC<ITextProps> = ({color, size, weight, title}) => {
    return (
        <TextComponent  color={color} size={size} weight={weight} dangerouslySetInnerHTML={{__html: title}}></TextComponent>
    )
}

export { A_Text }
