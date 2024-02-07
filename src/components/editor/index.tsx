import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import ImageRiseze from 'quill-image-resize-module-react'

import { Container } from './styles'

Quill.register('modules/imageResize', ImageRiseze)

interface EditorProps {
  editorContent: string
  handleContent: (value: any) => void
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
      ['clean'],
      [{ video: true }]
    ],
    imageResize: {
      parchment: Quill.import('parchment')
    }
  }

  const VideoBlot = Quill.import('formats/video')
  // const Parchment = Quill.import('parchment')
  const Link = Quill.import('formats/link')

  class VideoWithLink extends VideoBlot {
    static create (value: any) {
      const node = super.create(value)
      if (value) {
        node.innerHTML = `<iframe frameborder="0" allowfullscreen="true" src="${value}"></iframe>`
      }
      return node
    }

    static formats () {
      return true
    }
  }

  Quill.register('formats/video', VideoWithLink)
  Quill.register(Link)

  return (
    <Container>
      <ReactQuill
        value={props.editorContent}
        onChange={props.handleContent}
        modules={modules}
        placeholder='Digite aqui o texto da sua nóticia'
        className='editor'
      />
    </Container>
  )
}
