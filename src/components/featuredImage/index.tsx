import { useState } from 'react'
import { Container } from './styles'

interface FeaturedImageProps {
  urlImg: string
  descriptionImg: string
  handleInputChange: () => void
  handleImg: (url: string) => void
  required: boolean
}

export default function FeaturedImage (props: FeaturedImageProps): JSX.Element {
  const [imageUrl, setImateUrl] = useState('')

  const uploadImage = async (e: any): Promise<void> => {
    const file = e.target.files[0]

    if (file instanceof File) {
      const formData = new FormData()
      formData.append('file', file)

      try {
        const url = `${process.env.DATABASE_URL}/image`

        const response = await fetch(url, {
          method: 'POST',
          body: formData
        })

        if (response.ok) {
          const data = await response.json()
          const img = data.url
          console.log(data)
          props.handleImg(img)
          setImateUrl(img)
        }
      } catch (error) {
        console.log('Error ao fazer o upload da imagem: ', error)
      }
    }
  }

  return (
    <Container>
      {imageUrl !== ''
        ? (
          <div className='box-image'>
            <img className='image' src={imageUrl} alt="image" />
          </div>)
        : (
          <div className='no-image'>
            <p>Sem imagem</p>
          </div>)}

      <input className='input-upload-image' type="file" accept='image/*' onChange={uploadImage} required= {props.required}/>
    </Container>
  )
}
