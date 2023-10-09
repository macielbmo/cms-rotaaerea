import { useState, useEffect } from 'react'
import { UserList } from '../../components/UserList'

import { UserRegistration } from '../../components/Modais/userRegistration'
import { Main } from '../../assets/styles/global'
import { Container } from './styles'

export function Users (): JSX.Element {
  const [modal, setModal] = useState(false)
  const [users, setUsers] = useState([])

  function toggleModal (): void {
    setModal(!modal)
  }

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(async (response) => {
        const json = await response.json()

        setUsers(json)
      })
      .catch((error) => {
        console.log('erro', error)
      })
  }, [])

  return (
    <Main>
      <Container>
        <div className='header'>
          <h1>Lista de usuários</h1>

          <button onClick={toggleModal}>Novo Usuário</button>
        </div>

        {modal
          ? (
            <UserRegistration setModal={toggleModal}/>)
          : null}

        <div className='box-search'>
          <input className='input search' type="search" placeholder='Pesquisar...'/>

          <div className='input-select'>
            <select className='input' name="type-user" id="type" placeholder='Tipo do usuário'>
              <option value="all">Todos</option>
              <option value="administrador">Administrador</option>
              <option value="redator">Readator</option>
              <option value="usuario">Usuário</option>
            </select>

            <select className='input' name="status" id="status">
              <option value="all">Todos</option>
              <option value="ativo">Ativo</option>
              <option value="desativado">Desativado</option>
            </select>
          </div>
        </div>

        <UserList users={users}/>
      </Container>
    </Main>
  )
}
