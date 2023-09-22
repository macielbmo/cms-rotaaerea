import { type ReactNode } from 'react'
import { Container } from './styles'

interface DropdownProps {
  name: string
  chieldren: ReactNode
}

export function ItemsDropdown ({ chieldren, name }: DropdownProps): JSX.Element {
  return (
    <Container>
        <span>{chieldren}</span>
        <h4>{name}</h4>
    </Container>
  )
}
