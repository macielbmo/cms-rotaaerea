import { Container } from './styles'
import Options from './options'
import ActiveStatus from './status/active'
// import DisabledStatus from './status/disabled'

interface UserListProps {
  categorys: [{
    name: string
  }]
}

export function CategoryList ({ categorys }: UserListProps): JSX.Element {
  return (
    <Container>
      <table>
        <thead>
          <tr className='row'>
            <th>Titulo</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        {categorys.map((category) => (
          <tbody key={category.name}>
            <tr className='row'>
              <td className='name-user'>{category.name}</td>
              <td><ActiveStatus /> </td>
              <td className='options'><Options/></td>
            </tr>
          </tbody>
        ))}
      </table>
    </Container>
  )
}
