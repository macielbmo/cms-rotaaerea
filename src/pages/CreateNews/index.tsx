import { Main } from '../../assets/styles/global'
import { Container } from './styles'

import Editor from '../../components/editor'
import FeaturedImage from '../../components/featuredImage'

export default function CreateNews (): JSX.Element {
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
              <input type="text" id='headline' placeholder='Resumo curto (max 30 caracteres)' />
            </div>

            <div className='input'>
              <label htmlFor="title">Título da Notícia</label>
              <input type="text" id='title' placeholder='Difite o titulo' />
            </div>

            <div className='input'>
              <label htmlFor="sub-title">Subtítulo</label>
              <input type="text" id='sub-title' placeholder='Difite o subtitulo' />
            </div>

            <div className='input'>
              <label htmlFor="content">Conteúdo</label>
              <Editor />
            </div>

            <div className='input'>
              <label htmlFor="sub-title">Exibir nome do Autor como:</label>
              <input type="text" id='sub-title' placeholder='Nome do autor' />
            </div>

            <div className='input'>
              <label htmlFor="sub-title">Fonte da Notícia</label>
              <input type="text" id='sub-title' placeholder='Nome da fonte' />
            </div>

            <div className='input'>
              <label htmlFor="sub-title">URL da fonte da notícia:</label>
              <input type="text" id='sub-title' placeholder='Insira a URL' />
            </div>
          </div>

          <div className='form-sider'>
            <h1>Publicar Post</h1>

            <FeaturedImage/>
          </div>
        </form>
      </Container>
    </Main>
  )
}
