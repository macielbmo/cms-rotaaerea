import { useState } from 'react'
import { Container } from './style'

import { FaSpinner } from 'react-icons/fa'

import imgConfirm from '../../../assets/img/img-modal/confirme.png'
import imgError from '../../../assets/img/img-modal/cancelar.png'
import imgAttention from '../../../assets/img/img-modal/attention.png'

interface ModalProps {
  toggleModal: () => void
  newsId: string
}

export function DeleteNews (props: ModalProps): JSX.Element {
  const [loading, setLoading] = useState(false)
  const [mensageConfirm, setMensageConfirm] = useState(false)
  const [mensageError, setMesageError] = useState(false)

  async function reqDeleteUser (id: string): Promise<void> {
    setLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))

      const response = await fetch(`${process.env.DATABASE_URL}/news/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      setLoading(false)

      if (!response.ok) {
        setMesageError(true)
        throw new Error(`Erro ao excluir noticia. Código: ${response.status}`)
      }

      setMensageConfirm(true)
      console.log('Noticia excluído com sucesso.')
    } catch (error) {
      console.error('Erro ao excluir o noticia: ', (error as Error).message)
    }
  }

  function handleExitModal (): void {
    props.toggleModal()
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
              <h1>Notícia Excluída!</h1>
              <button onClick={handleExitModal} className='btnExit'>Fechar</button>
            </div>
          )
          : null}

        {mensageError
          ? (
            <div className='mensage-modal'>
              <img src={imgError} alt="icon de confirmação" />
              <h1>Erro ao excluir notícia!</h1>
              <button onClick={handleExitModal} className='btnExit'>Fechar</button>
            </div>
          )
          : null}

        {!loading && !mensageConfirm && !mensageError && (
          <>
            <img src={imgAttention} alt="" />
            <p>Você realmente deseja excluir essa notícias?</p>
            <div className='boxBtn'>
              <button
                className='btnCancelar'
                type="submit"
                onClick={() => { props.toggleModal() }}
              >Não excluir</button>
              <button
                className='btnCadastrar'
                type="submit"
                onClick={() => { void reqDeleteUser(props.newsId) }}
              >Sim, Excluir</button>
            </div>
          </>
        )}
      </div>
    </Container>
  )
}
