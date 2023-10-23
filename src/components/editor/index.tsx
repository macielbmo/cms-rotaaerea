import { Container } from './styles'

import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import ImageRiseze from 'quill-image-resize-module-react'
Quill.register('modules/imageResize', ImageRiseze)

interface EditorProps {
  editorContent: string
  haddleEditorContent: () => {}
}

export default function Editor (props: EditorProps): JSX.Element {
  const modules = {
    toolbar: [
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],

      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],

      [{ color: [] }, { background: [] }],
      [{ align: [] }],

      ['bold', 'italic', 'underline'],
      ['link', 'image'],
      ['clean']
    ],
    imageResize: {
      parchment: Quill.import('parchment')
      // See optional "config" below
    }
  }

  return (
    <Container>
      <ReactQuill
        value={props.editorContent}
        onChange={(value) => { props.haddleEditorContent(value) }}
        modules={modules}
        placeholder='Digite aqui o texto da sua nóticia'
        className='editor'
      />
    </Container>
  )
}
