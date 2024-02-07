import { Container } from './styles'
import Options from './options'
import ActiveStatus from './status/active'
// import DisabledStatus from './status/disabled'

interface user {
  id: string
  name: string
  email: string
  cpf: string
  type: string
}

interface UserListProps {
  users: user[]
}

export function UserList ({ users }: UserListProps): JSX.Element {
  return (
    <Container>
      <table>
        <thead>
          <tr className='row'>
            <th>Nome</th>
            <th>Email</th>
            <th>CPF</th>
            <th>Tipo</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        {users.map((user) => (
          <tbody key={user.id}>
            <tr className='row'>
              <td className='name-user'>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.cpf} 155.699.996-80</td>
              <td>{user.type} Administrador</td>
              <th>
                <ActiveStatus />
              </th>
              <td className='options'><Options userId={user.id}/></td>
            </tr>
          </tbody>
        ))}
      </table>
    </Container>
  )
}
