import { type FormEvent, useState, useEffect } from 'react'

import { Main } from '../../assets/styles/global'
import { Container } from './styles'

import Editor from '../../components/editor'
import FeaturedImage from '../../components/featuredImage'
import InputText from '../../components/inputs/inputText'

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
    toSchedule: ''
  })

  const [categories, setCategories] = useState()

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
    console.log(e)

    setNewsData(prevNewsData => ({
      ...prevNewsData,
      [name]: e
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setNewsData(prevNewsData => ({
      ...prevNewsData,
      [name]: value
    }))

    console.log(newsData)
  }

  const [publish, setPublish] = useState(false)

  function handlePublish (e: FormEvent): void {
    e.preventDefault()
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
            <div className='input'>
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

              <div className='input'>
                <label htmlFor="content">Conteúdo</label>
                <Editor
                  editorContent={newsData.content}
                  handleContent={handleContent} />
              </div>

              <InputText
                label='Exibir nome do Autor como:'
                type='text'
                id='author'
                name='author'
                placeholder='Nome do autor'
                value={newsData.author}
                onChange={handleInputChange}
              />

              <InputText
                label='Fonte da Notícia'
                type='text'
                id='sourse'
                name='sourceNews'
                placeholder='Digite o nome da fonte'
                value={newsData.sourceNews}
                onChange={handleInputChange}
              />

              <InputText
                label='URL da fonte da notícia:'
                type='text'
                id='urlSource'
                name='urlSource'
                placeholder='Digite a URL da fonte'
                value={newsData.urlSource}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className='form-sider'>
            <h1>Publicar Post</h1>

            <FeaturedImage
              urlImage={newsData.urlImg}
              descriptionImg={newsData.descriptionImg}
              handleInputChange={handleInputChange}
              handleImg={handleImg}
            />

            <div className='category-select'>
              <h1>Escolha a categoria</h1>

              <div className='select-category'>
                {categories
                  ? (
                      categories.map((category) => (
                      <label htmlFor={category.name}>

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

            <button className='button-publish' onClick={handlePublish}>Publicar Post</button>
          </div>
        </form>
      </Container>
    </Main>
  )
}
