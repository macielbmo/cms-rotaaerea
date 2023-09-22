import { type ReactNode } from 'react'
import { Container } from './styles'

interface NavProps {
  name: string
  chieldren: ReactNode
}

export function Items ({ chieldren, name }: NavProps): JSX.Element {
  return (
    <Container>
        <span>{chieldren}</span>
        <h4>{name}</h4>
    </Container>
  )
}
