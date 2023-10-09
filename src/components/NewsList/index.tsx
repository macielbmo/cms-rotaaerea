import { Container } from './styles'
import Options from './options'
import ActiveStatus from './status/active'
import DisabledStatus from './status/disabled'

interface UserListProps {
  users: [{
    id: number
    name: string
    email: string
    cpf: string
    type: string
  }]
}

export function NewsList ({ users }: UserListProps): JSX.Element {
  return (
    <Container>
      <table>
        <thead>
          <tr className='row'>
            <th>Titulo</th>
            <th>Vizualizações</th>
            <th>Redator</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        {users.map((user) => (
          <tbody key={user.id}>
            <tr className='row'>
              <td className='name-user'>Novos aviões da frota da Azul 2024</td>
              <td>1200</td>
              <td>Maciel Martins</td>
              <td>Companhias Aérea</td>
              <td>29/12/2029</td>
              <td><ActiveStatus /> </td>
              <td className='options'><Options/></td>
            </tr>
          </tbody>
        ))}
      </table>
    </Container>
  )
}
