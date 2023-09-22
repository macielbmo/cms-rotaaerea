import { useState } from 'react'
import { Container } from './styles'

export default function Search (): JSX.Element {
  const [radioSelect, setRadioSelect] = useState<string>('nome')

  function handleRadioChange (e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target
    setRadioSelect(value)
  }

  return (
    <Container>
      <h4>Pesquisar</h4>

      <div className='search'>
        <input type='search' placeholder={
          radioSelect === 'nome' ? 'Digite o nome do usuário' : radioSelect === 'email' ? 'Digite o email do usuário' : radioSelect === 'cpf' ? 'Digite o CPF do usuário' : ''
        }/>
      </div>

      <div className='box-input-radio'>
        <label htmlFor='nome'>
          <input type='radio' name='acount' value='nome' id='nome' checked={radioSelect === 'nome'} onChange={handleRadioChange} />
          Nome
        </label>

        <label htmlFor='email'>
          <input type='radio' name='acount' value='email' id='email' checked={radioSelect === 'email'} onChange={handleRadioChange} />
          E-mail
        </label>

        <label htmlFor='cpf'>
          <input type='radio' name='acount' value='cpf' id='cpf' checked={radioSelect === 'cpf'} onChange={handleRadioChange} />
          CPF
        </label>
      </div>
    </Container>
  )
}
