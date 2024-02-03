import bg from './bg.jpg'

// Material-UI
import Input from '@mui/material/Input'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'

// Styled - CSS
import { Container } from './styles'

export function Login (): JSX.Element {
  return (
    <Container>
      <form className='login-modal'>
        <h1 className='title'>Login</h1>

        <div className='modal'>
          <div className='box-input'>
            <TextField
              className='input'
              id='outlined-basic'
              type='email'
              label='E-mail'
              variant='outlined'
              size='small'
              required
            />

            <TextField
              className='input'
              id='outlined-basic'
              type='password'
              label='Senha'
              variant='outlined'
              size='small'
              required
            />
          </div>

          <div className='inputSecundary'>
            <div>
              <FormControlLabel control={<Checkbox size='small'/>} label='Ficar conectado' className='checkbox'/>
            </div>
            <a href="">Esqueceu sua senha?</a>
          </div>

          <Button variant='contained' fullWidth className='button'>Entrar</Button>
        </div>
      </form>

      <div className='login-img'>
        <img className='img-bg' src={bg} alt="" />
      </div>
    </Container>
  )
}
