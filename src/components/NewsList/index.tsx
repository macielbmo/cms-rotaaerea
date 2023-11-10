import { Container } from './styles'
import Options from './options'
import ActiveStatus from './status/active'
import DisabledStatus from './status/disabled'

interface UserListProps {
  news: [{
    id: number
    title: string
    author: string
    category: string
    category_user_name: string
    created_at: string
  }]
}

export function NewsList ({ news }: UserListProps): JSX.Element {
  console.log(news)

  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }

  return (
    <Container>
      <table>
        <thead>
          <tr className='row'>
            <th>Titulo</th>
            <th>Categoria</th>
            <th>Redator</th>
            <th>Data</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        {news.map((item) => (
          <tbody key={item.id}>
            <tr className='row'>
              <td className='title'>{item.title}</td>
              <td>{item.category_user_name}</td>
              <td>{item.author}</td>
              <td>{new Intl.DateTimeFormat('pt-BR', options).format(new Date(item.created_at))}</td>
              <td><ActiveStatus /> </td>
              <td className='options'><Options key={item.id} newsId={item.id}/></td>
            </tr>
          </tbody>
        ))}
      </table>
    </Container>
  )
}
