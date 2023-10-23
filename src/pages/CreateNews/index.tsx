import { type FormEvent, useState, useEffect } from 'react'

import { Main } from '../../assets/styles/global'
import { Container } from './styles'

import Editor from '../../components/editor'
import FeaturedImage from '../../components/featuredImage'

export default function CreateNews (): JSX.Element {
  const [manchete, setManchete] = useState('')
  const [titleNews, setTitleNews] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [author, setAuthor] = useState('')
  const [fonteTitle, setFonteTitle] = useState('')
  const [urlFonte, setUrlFonte] = useState('')

  const [editorContent, setEditorContent] = useState('')
  const [image, setImage] = useState('')
  const [descriptionImg, setDescriptionImg] = useState('')

  const [publish, setPublish] = useState(false)

  function handlePublish (e: FormEvent) {
    e.preventDefault()
    setPublish(!publish)
  }

  function haddleManchete (value: any): void {
    setManchete(value)
  }
  function haddleTitleNews (value: any): void {
    setTitleNews(value)
  }
  function haddleSubtitle (value: any): void {
    setSubtitle(value)
  }
  function haddleAuthor (value: any): void {
    setAuthor(value)
  }
  function haddleFonteTitle (value: any): void {
    setFonteTitle(value)
  }
  function haddleUrlFonte (value: any): void {
    setUrlFonte(value)
  }

  function haddleEditorContent (value: any): void {
    setEditorContent(value)
  }

  function haddleImage (value: any): void {
    setImage(value)
  }
  function haddleDescriptionImg (value: any): void {
    setDescriptionImg(value)
  }

  const newsData = {
    editorContent,
    manchete,
    titleNews,
    subtitle,
    author,
    fonteTitle,
    urlFonte,
    image,
    descriptionImg
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

  return (
    <Main>
      <Container>
        <div className='header'>
          <h1>Nova notícia</h1>
        </div>

        <form>
          <div className='form-news'>
            <div className='input'>
              <label htmlFor="headline">Manchete da Notícia</label>
              <input
                type="text"
                id='headline'
                placeholder='Resumo curto (max 30 caracteres)'
                value={manchete}
                onChange={(e) => { haddleManchete(e.target.value) }}/>
            </div>

            <div className='input'>
              <label htmlFor="title">Título da Notícia</label>
              <input
                type="text"
                id='title'
                placeholder='Difite o titulo'
                value={titleNews}
                onChange={(e) => { haddleTitleNews(e.target.value) }}/>
            </div>

            <div className='input'>
              <label htmlFor="sub-title">Subtítulo</label>
              <input
                type="text"
                id='sub-title'
                placeholder='Difite o subtitulo'
                value={subtitle}
                onChange={(e) => { haddleSubtitle(e.target.value) }}/>
            </div>

            <div className='input'>
              <label htmlFor="content">Conteúdo</label>
              <Editor editorContent={editorContent} haddleEditorContent={haddleEditorContent} />
            </div>

            <div className='input'>
              <label htmlFor="sub-title">Exibir nome do Autor como:</label>
              <input
                type="text"
                id='sub-title'
                placeholder='Nome do autor'
                value={author}
                onChange={(e) => { haddleAuthor(e.target.value) }}/>
            </div>

            <div className='input'>
              <label htmlFor="sub-title">Fonte da Notícia</label>
              <input
                type="text"
                id='sub-title'
                placeholder='Nome da fonte'
                value={fonteTitle}
                onChange={(e) => { haddleFonteTitle(e.target.value) }}/>
            </div>

            <div className='input'>
              <label htmlFor="sub-title">URL da fonte da notícia:</label>
              <input
                type="text"
                id='sub-title'
                placeholder='Insira a URL'
                value={urlFonte}
                onChange={(e) => { haddleUrlFonte(e.target.value) }}/>
            </div>
          </div>

          <div className='form-sider'>
            <h1>Publicar Post</h1>

            <FeaturedImage
              descriptionImg={descriptionImg}
              image={image}
              haddleDescriptionImg={haddleDescriptionImg}
              haddleImage={haddleImage}/>

            <button className='button-publish' onClick={handlePublish}>Publicar Post</button>
          </div>
        </form>
      </Container>
    </Main>
  )
}
