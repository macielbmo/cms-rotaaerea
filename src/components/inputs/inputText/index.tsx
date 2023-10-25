import { Container } from './style'

interface InputTextProps {
  label: string
  type: string
  id: string
  name: string
  placeholder: string
  value: string
  onChange: () => void
}

export default function InputText (props: InputTextProps): JSX.Element {
  return (
    <Container>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </Container>
  )
}
