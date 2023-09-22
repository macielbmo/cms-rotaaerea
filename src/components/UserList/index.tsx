import { useState } from 'react'
import { BsPencil, BsTrash2 } from 'react-icons/bs'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2'

import { Container } from './styles'

import { UserDelete } from '../Modais/userDelete'

interface UserListProps {
  users: [{
    id: number
    name: string
    email: string
    cpf: string
    type: string
  }]
}

export function UserList ({ users }: UserListProps): JSX.Element {
  const [modalDelete, setModalDelete] = useState(false)

  function toggleDelete (): void {
    setModalDelete(!modalDelete)
  }

  return (
    <Container>
      <table>
        <thead>
          <tr className='row'>
            <th>Nome</th>
            <th>Email</th>
            <th>CPF</th>
            <th>Tipo</th>
            <th>Ações</th>
          </tr>
        </thead>

        {users.map((user) => (
          <tbody key={user.id}>
            <tr className='row'>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.cpf}</td>
              <td>{user.type}</td>
              <td className='action'>
                <div className="btn-action"><BsPencil data-id={user.id}/></div>
                <div className="btn-action"><BsTrash2 onClick={toggleDelete} data-id={user.id}/></div>
                <div className="btn-action"><HiMiniMagnifyingGlass data-id={user.id}/></div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      { modalDelete
        ? (
          <UserDelete setModal={toggleDelete}/>)
        : null}
    </Container>
  )
}
