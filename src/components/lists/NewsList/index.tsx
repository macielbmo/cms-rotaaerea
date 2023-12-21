import { useState } from 'react'

// css
import { Container } from './styles'

// Componentes
import Options from './options'
import ActiveStatus from './status/active'
import DisabledStatus from './status/disabled'

interface UserListProps {
  news: [{
    id: string
    title: string
    author: string
    category: string
    category_news_name: string
    created_at: string
  }]
}

export function NewsList ({ news }: UserListProps): JSX.Element {
  const [sizeList, setSizeList] = useState(10)

  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }

  function plusList (): void {
    setSizeList(sizeList + 10)
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

        {news.slice(0, sizeList).map((item, index) => (
          <tbody key={index}>
            <tr className='row'>
              <td className='title'>{item.title}</td>
              <td>{item.category_news_name}</td>
              <td>{item.author}</td>
              <td>{new Intl.DateTimeFormat('pt-BR', options).format(new Date(item.created_at))}</td>
              <td> <ActiveStatus/> </td>
              <td className='options'><Options key={item.id} newsId={item.id}/></td>
            </tr>
          </tbody>
        ))}
      </table>

      <div className='btn-plus-news'>
        {sizeList < news.length && (
          <button onClick={plusList}>Mais notícias...</button>
        )}
      </div>
    </Container>
  )
}
