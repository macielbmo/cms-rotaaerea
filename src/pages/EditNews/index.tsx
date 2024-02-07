import { type FormEvent, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Main } from '../../assets/styles/global'
import { Container } from './styles'

import Editor from '../../components/editor'
import FeaturedImage from '../../components/featuredImage'
import InputTags from '../../components/inputs/inputTags'

// Material-UI
import { Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'

// Interface
interface RouteParams {
  id: string
  [key: string]: string | undefined
}
interface Category {
  name: string
}

export default function EditNews (): JSX.Element {
  const { id } = useParams<RouteParams>()

  console.log(id)

  const [newsData, setNewsData] = useState({
    title: '',
    subtitle: '',
    content: '',
    author: '',
    sourceNews: '',
    urlSource: '',
    urlImg: '',
    descriptionImg: '',
    category: '',
    tags: [],
    toSchedule: '',
    status: ''
  })

  const [statusNewsData, setStatusNewsData] = useState(false)
  const [categories, setCategories] = useState<Category[]>()
  const [publish, setPublish] = useState(false)

  function handleContent (value: any): void {
    const name = 'content'

    setNewsData(prevNewsData => ({
      ...prevNewsData,
      [name]: value
    }))
  }

  function handleImg (url: any): void {
    const name = 'urlImg'
    console.log(url)

    setNewsData(prevNewsData => ({
      ...prevNewsData,
      [name]: url
    }))
  }

  function handleCategory (e: any): void {
    const name = 'category'

    setNewsData(prevNewsData => ({
      ...prevNewsData,
      [name]: e
    }))
  }

  function handleTags (tags: any): void {
    const name = 'tags'

    setNewsData(prevNewsData => ({
      ...prevNewsData,
      [name]: tags
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target

    setNewsData(prevNewsData => ({
      ...prevNewsData,
      [name]: value
    }))
  }

  async function handleSalve (e: FormEvent): Promise<void> {
    e.preventDefault()
    const name = 'status'

    setNewsData(prevNewsData => ({
      ...prevNewsData,
      [name]: 'true'
    }))

    setPublish(!publish)
    await updateNews()
  }

  function handleClearForm (): void {
    setNewsData((data) => ({
      title: data.title,
      subtitle: data.subtitle,
      content: data.content,
      author: data.author,
      sourceNews: data.sourceNews,
      urlSource: data.urlSource,
      urlImg: data.urlImg,
      descriptionImg: data.descriptionImg,
      category: data.category,
      tags: data.tags,
      toSchedule: data.toSchedule,
      status: data.status
    }))
  }

  function handleGetNews (news: any): void {
    setNewsData(() => ({
      title: news.title,
      subtitle: news.subtitle,
      content: news.content,
      author: news.author,
      sourceNews: news.news_source,
      urlSource: news.url_source,
      urlImg: news.url_img,
      descriptionImg: news.image_description,
      category: news.category_news_name,
      tags: news.tags,
      toSchedule: news.schedule,
      status: news.status
    }))

    console.log(newsData)
  }

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(`${process.env.API_URL}/news/${id}`)
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados da notícia')
        }

        const news = await response.json()
        console.log(news)
        handleGetNews(news)
        setStatusNewsData(true)
      } catch (error) {
        console.error(error)
      }
    }
    void fetchData()
  }, [id])

  const updateNews = async (): Promise<void> => {
    try {
      const url = `${process.env.API_URL}/news/${id}`

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(newsData)
      })

      if (!response.ok) {
        throw new Error('Erro ao publicar noticia')
      }

      const data = await response.json()
      console.log('Noticia publicada com sucesso:', data)
      handleClearForm()
    } catch (error) {
      console.log('Erro ao publicar noticia:', error)
    }
    // console.log(newsData)
  }

  useEffect(() => {
    if (publish) {
      void updateNews()
    }
  }, [publish])

  useEffect(() => {
    fetch(`${process.env.API_URL}/categories`)
      .then(async (response) => {
        const json = await response.json()

        setCategories(json)
      })
      .catch((error) => {
        console.log('erro', error)
      })
  }, [])

  return (
    <Main>
      <Container>
        <div className='header'>
          <h1>Editar notícia</h1>
        </div>

        {statusNewsData
          ? (
            <>
              <form>
                <section className='section-one'>
                  <div className='row-1'>
                    <div className='title'>
                      <TextField
                        id='outlined-basic'
                        label='Título'
                        variant='outlined'
                        size='small'
                        fullWidth

                        name='title'
                        type='text'
                        required
                        value={newsData.title}
                        onChange={handleInputChange}
                      />

                      <TextField
                        id='outlined-basic'
                        label='Subtítulo'
                        variant='outlined'
                        size='small'
                        fullWidth

                        name='subtitle'
                        type='text'
                        value={newsData.subtitle}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className='input-content'>
                      <label htmlFor="content">Conteúdo</label>
                      <Editor
                        editorContent={newsData.content}
                        handleContent={handleContent} />
                    </div>

                    <div className='author'>
                      <TextField
                        id='outlined-basic'
                        label='Nome do autor'
                        variant='outlined'
                        size='small'
                        fullWidth

                        name='author'
                        type='text'
                        value={newsData.author}
                        required={true}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className='source-news'>
                      <TextField
                        id='outlined-basic'
                        label='Nome da fonte da notícia'
                        variant='outlined'
                        size='small'
                        fullWidth

                        name='sourceNews'
                        type='text'
                        value={newsData.sourceNews}
                        onChange={handleInputChange}
                      />

                      <TextField
                        id='outlined-basic'
                        label='URL fonte da notícia'
                        variant='outlined'
                        size='small'
                        fullWidth

                        name='urlSource'
                        type='text'
                        value={newsData.urlSource}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className='row-2'>
                    <div className='input-image'>
                      <label>Imagem de destaque</label>

                      <FeaturedImage
                        urlImg={newsData.urlImg}
                        handleImg={handleImg}
                        required={true}
                      />

                      <TextField
                        id='outlined-basic'
                        className='source-img'
                        label='Fonte da imagem'
                        variant='outlined'
                        size='small'
                        fullWidth

                        name='descriptionImg'
                        type='text'
                        value={newsData.descriptionImg}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className='category-select'>
                      <FormLabel id="demo-radio-buttons-group-label">Escolha uma categoria</FormLabel>

                      <div className='select-category'>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                        >
                          {categories
                            ? (
                                categories.map((category) => (
                                <FormControlLabel
                                  key={category.name}
                                  value={category.name}
                                  control={
                                    <Radio
                                      checked={newsData.category === category.name}
                                      required
                                      onChange={(e) => { handleCategory(e.target.value) }}
                                    />}
                                  label={category.name}/>

                                ))
                              )
                            : null}
                        </RadioGroup>
                      </div>
                    </div>

                    <InputTags
                      tags={newsData.tags}
                      handleTags={handleTags}
                    />

                    <div>
                      <label>Agendar postagem</label>
                      <TextField
                        id='outlined-basic'
                        variant='outlined'
                        size='small'
                        fullWidth

                        name='toSchedule'
                        type='datetime-local'
                        value={newsData.toSchedule}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className='buttons'>
                      <Button fullWidth variant='contained' onClick={handleSalve}>Salvar</Button>
                    </div>
                  </div>
                </section>
              </form>
            </>
            )
          : (
            <p>Carregando página...</p>
            )}
      </Container>
    </Main>
  )
}
