import { type FormEvent, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Main } from '../../assets/styles/global'
import { Container } from './styles'

import Editor from '../../components/editor'
import FeaturedImage from '../../components/featuredImage'
import InputText from '../../components/inputs/inputText'
import InputTags from '../../components/inputs/inputTags'

import { BiLogoLess } from 'react-icons/bi'

interface RouteParams {
  id: string
  [key: string]: string | undefined
}

export default function EditNews (): JSX.Element {
  const { id } = useParams<RouteParams>()

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

  const [categories, setCategories] = useState()

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

  function handlePublish (e: FormEvent): void {
    e.preventDefault()
    const name = 'status'

    setNewsData(prevNewsData => ({
      ...prevNewsData,
      [name]: 'true'
    }))

    setPublish(!publish)
  }

  function handleSalve (e: FormEvent): void {
    e.preventDefault()
    const name = 'status'

    setNewsData(prevNewsData => ({
      ...prevNewsData,
      [name]: 'false'
    }))

    setPublish(!publish)
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
      urlImg: news.url_image,
      descriptionImg: news.image_description,
      category: news.category_news_name,
      tags: news.tags,
      toSchedule: news.schedule,
      status: news.status
    }))
  }

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(`${process.env.DATABASE_URL}/news/${id}`)
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados da notícia')
        }

        const news = await response.json()
        handleGetNews(news)
      } catch (error) {
        console.error(error)
      }
    }
    void fetchData()
  }, [id])

  const registerNews = async (): Promise<void> => {
    try {
      const url = 'http://localhost:3001/news'

      const response = await fetch(url, {
        method: 'POST',
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

    console.log(newsData)
  }

  useEffect(() => {
    if (publish) {
      void registerNews()
    }
  }, [publish])

  useEffect(() => {
    fetch('http://localhost:3001/categories')
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

        {Object.keys(newsData).length > 11
          ? (
            <form>
              <div className='form-news'>
                <InputText
                  label='Título da notícia'
                  type='text'
                  id='title-news'
                  name='title'
                  placeholder='Digite o título'
                  value={newsData.title}
                  required={true}
                  onChange={handleInputChange}
                />

                <InputText
                  label='Subtítulo'
                  type='text'
                  id='sub-title'
                  name='subtitle'
                  placeholder='Digite o subtítulo'
                  value={newsData.subtitle}
                  required={false}
                  onChange={handleInputChange}
                />

                <div className='input-content'>
                  <label htmlFor="content">Conteúdo</label>
                  <Editor
                    editorContent={newsData.content}
                    handleContent={handleContent} />
                </div>

                <InputText
                  label='Nome do autor'
                  type='text'
                  id='author'
                  name='author'
                  placeholder='Nome do autor'
                  value={newsData.author}
                  required={true}
                  onChange={handleInputChange}
                />

                <InputText
                  label='Nome da fonte da notícia'
                  type='text'
                  id='sourse'
                  name='sourceNews'
                  placeholder='Digite o nome da fonte'
                  value={newsData.sourceNews}
                  required={false}
                  onChange={handleInputChange}
                />

                <InputText
                  label='URL da fonte da notícia'
                  type='text'
                  id='urlSource'
                  name='urlSource'
                  placeholder='Digite a URL da fonte'
                  value={newsData.urlSource}
                  required={false}
                  onChange={handleInputChange}
                />

                {newsData.urlImg !== undefined && (
                  <div className='input-image'>
                    <label>Imagem de destaque</label>
                    <FeaturedImage
                      urlImg={newsData.urlImg}
                      descriptionImg={newsData.descriptionImg}
                      handleInputChange={handleInputChange}
                      handleImg={handleImg}
                      required={true}
                    />

                    <InputText
                      label='Fonte da imagem'
                      type='text'
                      id='descriptionImg'
                      name='descriptionImg'
                      placeholder='Digite a fonte da imagem'
                      value={newsData.descriptionImg}
                      required={true}
                      onChange={handleInputChange}
                    />
                  </div>
                )}

                <div className='category-select'>
                  <label>Escolha uma categoria</label>

                  <div className='select-category'>
                    {categories?.map((category) => (
                      <label key={category.id} htmlFor={category.name}>

                        <input
                          type="radio"
                          name="category"
                          value={category.name}
                          id={category.name}
                          checked={newsData.category === category.name}
                          required
                          onChange={(e) => { handleCategory(e.target.value) }} />

                        {category.name}
                      </label>
                    ))}
                  </div>
                </div>

                <InputTags
                  key={id}
                  handleTags={handleTags}
                  tags={newsData.tags}
                />

                <InputText
                  label='Agendar postagem'
                  type='datetime-local'
                  id='dateTimeInput'
                  name='toSchedule'
                  value={newsData.toSchedule}
                  required={false}
                  placeholder={new Date().toLocaleDateString()}
                  onChange={handleInputChange}
                />

                <div className='buttons'>
                  <button className='button-salve' onClick={handleSalve}>Salvar</button>
                  <button className='button-publish' onClick={handlePublish}>Publicar Post</button>
                </div>
              </div>
            </form>
          )
          : (
            <p>Carregando página...</p>
          )}
      </Container>
    </Main>
  )
}
