import { type FormEvent, useState, useEffect } from 'react'

import { Main } from '../../assets/styles/global'
import { Container } from './styles'

import Editor from '../../components/editor'
import FeaturedImage from '../../components/featuredImage'
import InputText from '../../components/inputs/inputText'
import InputTags from '../../components/inputs/inputTags'
import { BiLogoLess } from 'react-icons/bi'

export default function CreateNews (): JSX.Element {
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
    tags: [''],
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const registerNews = async () => {
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
    } catch (error) {
      console.log('Erro ao publicar noticia:', error)
    }

    console.log(newsData)
  }

  useEffect(() => {
    if (publish) {
      registerNews()
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
          <h1>Nova notícia</h1>
        </div>

        <form>
          <div className='form-news'>
            <InputText
              label='Título da notícia'
              type='text'
              id='title-news'
              name='title'
              placeholder='Digite o título'
              value={newsData.title}
              onChange={handleInputChange}
            />

            <InputText
              label='Subtítulo'
              type='text'
              id='sub-title'
              name='subtitle'
              placeholder='Digite o subtítulo'
              value={newsData.subtitle}
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
              onChange={handleInputChange}
            />

            <InputText
              label='Nome da fonte da notícia'
              type='text'
              id='sourse'
              name='sourceNews'
              placeholder='Digite o nome da fonte'
              value={newsData.sourceNews}
              onChange={handleInputChange}
            />

            <InputText
              label='URL da fonte da notícia'
              type='text'
              id='urlSource'
              name='urlSource'
              placeholder='Digite a URL da fonte'
              value={newsData.urlSource}
              onChange={handleInputChange}
            />

            <div className='input-image'>
              <label>Imagem de destaque</label>
              <FeaturedImage
                urlImage={newsData.urlImg}
                descriptionImg={newsData.descriptionImg}
                handleInputChange={handleInputChange}
                handleImg={handleImg}
              />

              <InputText
                label='Fonte da imagem'
                type='text'
                id='descriptionImg'
                name='descriptionImg'
                placeholder='Digite a fonte da imagem'
                value={newsData.descriptionImg}
                onChange={handleInputChange}
              />
            </div>

            <div className='category-select'>
              <label>Escolha uma categoria</label>

              <div className='select-category'>
                {categories
                  ? (
                    categories.map((category) => (
                      <label key={category.id} htmlFor={category.name}>

                        <input
                          type="radio"
                          name="category"
                          value={category.name}
                          id={category.name}
                          checked={newsData.category === category.name}
                          onChange={(e) => { handleCategory(e.target.value) }} />

                        {category.name}
                      </label>
                    ))
                  )
                  : null}
              </div>
            </div>

            <InputTags
              handleTags={handleTags}
            />

            <InputText
              label='Agendar postagem'
              type='datetime-local'
              id='dateTimeInput'
              name='toSchedule'
              value={newsData.toSchedule}
              onChange={handleInputChange}
            />

            <div className='buttons'>
              <button className='button-salve' onClick={handleSalve}>Salvar</button>
              <button className='button-publish' onClick={handlePublish}>Publicar Post</button>
            </div>
          </div>
        </form>
      </Container>
    </Main>
  )
}
