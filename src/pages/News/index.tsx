import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { NewsList } from '../../components/lists/NewsList'
import { Main } from '../../assets/styles/global'
import { Container } from './styles'
import { Button } from '@mui/material'

export function News (): JSX.Element {
  const [dataNews, setNewsData] = useState([])

  useEffect(() => {
    fetch('https://rotaaerea-backend.vercel.app/news', {
      method: 'GET'
    })
      .then(async (response) => {
        const json = await response.json()
        setNewsData(json)
      })
      .catch((error) => {
        console.log('erro', error)
      })

    console.log(dataNews)
  }, [])

  console.log(dataNews)

  return (
    <Main>
      <Container>
        <div className='header'>
          <h1>Lista de notícias</h1>

          <Link to={'/noticias/criar-noticia'}>
            <Button className='btn-new-news'>Nova notícia</Button>
          </Link>
        </div>

        <NewsList news={dataNews}/>
      </Container>
    </Main>
  )
}
