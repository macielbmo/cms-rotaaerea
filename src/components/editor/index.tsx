import { type FormEvent, useState } from 'react'

import { Container } from './styles'

import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import ImageRiseze from 'quill-image-resize-module-react'
Quill.register('modules/imageResize', ImageRiseze)

export default function Editor (): JSX.Element {
  const [editorContent, setEditorContent] = useState('')

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

  function salvar (e: FormEvent): void {
    e.preventDefault()
    console.log(editorContent)
  }

  return (
    <Container>
      <ReactQuill
        value={editorContent}
        onChange={(value) => { setEditorContent(value) }}
        modules={modules}
        placeholder='Digite aqui o texto da sua nóticia'
        className='editor'
      />
    </Container>
  )
}
