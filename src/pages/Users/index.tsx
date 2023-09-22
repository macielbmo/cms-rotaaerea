import { useState, useEffect } from 'react'
import { UserList } from '../../components/UserList'
import styles from './users.module.css'
import { UserRegistration } from '../../components/Modais/userRegistration'
import Search from '../../components/inputs/Search'

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
    <main className={styles.main}>
      <div className={styles.title}>
        <div>
          <h1>Lista de usuários</h1>
        </div>
        <p>Gerencie os usuários</p>
      </div>

      <div className={styles.btnNewNews}>
        <button onClick={toggleModal}>Novo Usuário</button>
      </div>

      {modal
        ? (
          <UserRegistration setModal={toggleModal}/>)
        : null}

      <Search />
      <UserList users={users}/>
    </main>
  )
}
