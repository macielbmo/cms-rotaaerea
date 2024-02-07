import { useState } from 'react'
import { Container } from './style'

import { FaSpinner } from 'react-icons/fa'

import imgConfirm from '../../../assets/img/img-modal/confirme.png'
import imgError from '../../../assets/img/img-modal/cancelar.png'
import imgAttention from '../../../assets/img/img-modal/attention.png'

interface ModalProps {
  setModal: () => void
  idUser: string
}

export default function UserDelete (props: ModalProps): JSX.Element {
  const [loading, setLoading] = useState(false)

  const [mensageConfirm, setMensageConfirm] = useState(false)
  const [mensageError, setMesageError] = useState(false)

  function handleDeleteUser (): any {
    reqDeleteUser(props.idUser).catch(error => {
      console.error('Erro ao excluir o usuário: ', error)
    })
  }

  async function reqDeleteUser (userId: any): Promise<void> {
    setLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))

      const URL = process.env.API_URL

      const response = await fetch(`${URL}/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      setLoading(false)

      if (!response.ok) {
        setMesageError(true)
        throw new Error(`Erro ao excluir o usuário. Código: ${response.status}`)
      }

      setMensageConfirm(true)
      console.log('Item excluído com sucesso.')
    } catch (error) {
      console.error('Erro ao excluir o usuário: ', error)
    }
  }

  function handleExitModal (): void {
    props.setModal()
    window.location.reload()
  }

  return (
    <Container>
      <div className='modal'>

        {loading
          ? (
            <div className='mensage-modal'>
              <h1>Aguarde</h1>
              <FaSpinner className='spinner' />
            </div>
          )
          : null}

        {mensageConfirm
          ? (
            <div className='mensage-modal'>
              <img src={imgConfirm} alt="icon de confirmação" />
              <h1>Cadastro Excluído!</h1>
              <button onClick={handleExitModal} className='btnExit'>Fechar</button>
            </div>
            )
          : null}

        {mensageError
          ? (
            <div className='mensage-modal'>
              <img src={imgError} alt="icon de confirmação" />
              <h1>Erro ao excluir cadastro!</h1>
              <button onClick={handleExitModal} className='btnExit'>Fechar</button>
            </div>
            )
          : null}

        {!loading && !mensageConfirm && !mensageError && (
          <>
            <img src={imgAttention} alt="" />
            <p>Você realmente deseja excluir esse cadastro?</p>
            <div className='boxBtn'>
              <button
                className='btnCancelar'
                type="submit"
                onClick={() => { props.setModal() }}
              >Não excluir</button>
              <button
                className='btnCadastrar'
                type="submit"
                onClick={() => { handleDeleteUser() }}
              >Sim, Excluir</button>
            </div>
          </>
        )}
      </div>
    </Container>
  )
}
