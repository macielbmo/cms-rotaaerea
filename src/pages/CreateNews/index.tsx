import { type FormEvent, useState, useEffect } from 'react'

// Styles
import { Main } from '../../assets/styles/global'
import { Container } from './styles'

// Components
import Editor from '../../components/editor'
import FeaturedImage from '../../components/featuredImage'
import InputTags from '../../components/inputs/inputTags'

// Material-UI
import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'

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

  function handleClearForm (): void {
    setNewsData(() => ({
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
    }))
  }

  // Fetch - Registra noticia
  const registerNews = async () => {
    try {
      const url = `${process.env.API_URL}/news`

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
      registerNews()
    }
  }, [publish])

  // Fetch - Buscar categorias
  useEffect(() => {
    const url = process.env.API_URL

    fetch(`${url}/categories`)
      .then(async (response) => {
        const json = await response.json()

        setCategories(json)
        console.log(categories)
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
                  urlImage={newsData.urlImg}
                  descriptionImg={newsData.descriptionImg}
                  handleInputChange={handleInputChange}
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

                    {/* <label key={category.id} htmlFor={category.name}>

                      <input
                        type="radio"
                        name="category"
                        value={category.name}
                        id={category.name}
                        checked={newsData.category === category.name}
                        required
                        onChange={(e) => { handleCategory(e.target.value) }} />

                      {category.name}
                    </label> */}
                  </RadioGroup>
                </div>
              </div>

              <InputTags
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

            </div>
          </section>

          <section className='section-tow'>
            <div className='buttons'>
              <button className='button-salve' onClick={handleSalve}>Salvar</button>
              <button className='button-publish' onClick={handlePublish}>Publicar Post</button>
            </div>
          </section>
        </form>
      </Container>
    </Main>
  )
}
