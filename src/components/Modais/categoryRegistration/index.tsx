import { useState, useEffect } from 'react'
import styles from './userRegistration.module.css'

interface CategoryRegistrationProps {
  setModal: () => void
}

export function CategoryRegistration ({ setModal }: CategoryRegistrationProps): JSX.Element {
  const [userData, setUserData] = useState({
    name: ''
  })

  const [sendFomr, setSendFomr] = useState(false)

  const handleSend = (): void => {
    setSendFomr(!sendFomr)
    window.location.reload()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target

    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    console.log('Dados do usuário: ', userData)
  }

  const registerUser = async (): Promise<void> => {
    try {
      const url = 'http://localhost:3001/categories'

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(userData)
      })

      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário')
      }

      const data = await response.json()
      console.log('Usuário cadastrado com sucesso:', data)
    } catch (error) {
      console.log('Erro ao cadastrar usuário:', error)
    }

    setModal()
  }

  useEffect(() => {
    if (sendFomr) {
      registerUser()
    }
  }, [sendFomr])

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Nova Categoria</h1>

        <div className={styles.campo}>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" value={userData.name} onChange={handleInputChange} required />
        </div>

        <div className={styles.boxBtn}>
          <button className={styles.btnCancelar} type="submit" onClick={setModal}>Cancelar</button>
          <button className={styles.btnCadastrar} type="submit" onClick={handleSend}>Cadastrar</button>
        </div>
      </div>
    </form>
  )
}
