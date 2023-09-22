import { useState, useEffect } from 'react'
import styles from './userRegistration.module.css'

interface UserRegistrationProps {
  setModal: () => void
}

export function UserRegistration ({ setModal }: UserRegistrationProps) {
  const [radioSelect, setRadioSelect] = useState<string>('')

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    category_name: '',
    password: ''
  })

  const [sendFomr, setSendFomr] = useState(false)

  const handleSend = () => {
    setSendFomr(!sendFomr)
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRadioSelect(value)

    setUserData(prevUserData => ({
      ...prevUserData,
      category_name: value
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log('Dados do usuário: ', userData)
  }

  const registerUser = async () => {
    try {
      const url = 'http://localhost:3001/users'

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
        <h1 className={styles.title}>Novo Usuário</h1>

        <div className={styles.campo}>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" value={userData.name} onChange={handleInputChange} required />
        </div>

        <div className={styles.campo}>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" value={userData.email} onChange={handleInputChange} required/>
        </div>

        <div className={styles.campo}>
          <label htmlFor="cpf">CPF</label>
          <input type="text" name="cpf" id="cpf" value={userData.cpf} onChange={handleInputChange} required/>
        </div>

        <div className={styles.campo}>
          <label htmlFor="phone">Phone</label>
          <input type="sele" name="phone" id="phone" value={userData.phone} onChange={handleInputChange} />
        </div>

        <div className={styles.campo}>
          <h2>Tipo do perfil</h2>

          <label className={styles.options} htmlFor="administrador">
            <input type="radio" name="acount" value="adm" id="administrador" checked={radioSelect === 'adm'} onChange={handleRadioChange} />
                        Administrador
          </label>

          <label className={styles.options} htmlFor="redator">
            <input type="radio" name="acount" value="editor" id="redator" checked={radioSelect === 'editor'} onChange={handleRadioChange} />
                        Redator
          </label>

          <label className={styles.options} htmlFor="user">
            <input type="radio" name="acount" value="user" id="user" checked={radioSelect === 'user'} onChange={handleRadioChange} />
                        Usuário
          </label>
        </div>

        <div className={styles.campo}>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" value={userData.password} onChange={handleInputChange} required/>
        </div>

        <div className={styles.boxBtn}>
          <button className={styles.btnCancelar} type="submit" onClick={setModal}>Cancelar</button>
          <button className={styles.btnCadastrar} type="submit" onClick={handleSend}>Cadastrar</button>
        </div>
      </div>
    </form>
  )
}
