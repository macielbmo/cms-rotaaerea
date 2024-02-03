import { useEffect, useState } from 'react'
import { Container } from './styles'

// Material-UI
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined'

interface FeaturedImageProps {
  urlImg: string
  descriptionImg: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleImg: (url: string) => void
  required: boolean
}

export default function FeaturedImage (props: FeaturedImageProps): JSX.Element {
  const [imageUrl, setImgeUrl] = useState('')

  const uploadImage = async (e: any): Promise<void> => {
    const file = e.target.files[0]

    if (file instanceof File) {
      const formData = new FormData()
      formData.append('file', file)

      try {
        const url = 'https://rotaaerea-backend.vercel.app/image'

        const response = await fetch(url, {
          method: 'POST',
          body: formData
        })

        if (response.ok) {
          const data = await response.json()
          const img = data.url
          console.log(data)
          props.handleImg(img)
          setImgeUrl(img)
        }
      } catch (error) {
        console.log('Error ao fazer o upload da imagem: ', error)
      }
    }
  }

  // console.log('props.urlImg:', props.urlImg)

  useEffect(() => {
    if (props.urlImg !== undefined) {
      setImgeUrl(props.urlImg)
      // console.log('props.urlImg:', props.urlImg)
    }
    // console.log('props.urlImg:', props.urlImg)
  }, [props.urlImg])

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

      <div className='button-upload-img'>
        <label htmlFor='uploadImage'><BackupOutlinedIcon /> Enviar Foto</label>

        <input id='uploadImage' name='uploadImage' type="file" accept='image/*' onChange={uploadImage} required= {props.required}/>
      </div>
    </Container>
  )
}
