import { useState } from 'react'
import { Container } from './styles'

interface FeaturedImageProps {
  urlImg: string
  descriptionImg: string
  handleInputChange: () => void
  handleImg: (url: string) => void
}

export default function FeaturedImage (props: FeaturedImageProps): JSX.Element {
  const [imageUrl, setImateUrl] = useState('')

  const uploadImage = async (e: any): Promise<void> => {
    const file = e.target.files[0]

    if (file instanceof File) {
      try {
        const apiKey = '6b3e22d5ff291f94ce483ebca2f2b1d8'
        const formData = new FormData()
        formData.append('image', file)

        const response = await fetch('https://api.imgbb.com/1/upload?key=' + apiKey, {

          method: 'POST',
          body: formData
        })
        const { data } = await response.json()
        props.handleImg(data.url)
        setImateUrl(data.url)
      } catch (error) {
        console.log('Error ao fazer o upload da imagem: ', error)
      }
    }
  }

  return (
    <Container>
      <h2>Imagem destacada</h2>

      {imageUrl !== ''
        ? (
          <img className='image' src={imageUrl} alt="image" />)
        : (
          <div className='no-image'>
            <p>Sem imagem</p>
          </div>)}

      <input type="file" accept='image/*' onChange={uploadImage}/>

      <div className='description'>
        <label htmlFor="description">Descrição ou fonte da imagem</label>
        <input
          type="text"
          placeholder='Descrição (opcional)'
          value={props.descriptionImg}
          onChange={props.handleInputChange} />
      </div>
    </Container>
  )
}
