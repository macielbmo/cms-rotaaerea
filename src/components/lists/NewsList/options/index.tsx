import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { SlOptions } from 'react-icons/sl'
import { Icon, Menu } from './styles'
import { DeleteNews } from '../../../Modais/deleteNews'

interface OptionsProps {
  newsId: string
}

export default function Options ({ newsId }: OptionsProps): JSX.Element {
  const [modalDelete, setModalDelete] = useState<boolean>(false)
  const [options, setOptions] = useState(false)

  const menuRef = useRef<HTMLDivElement | null>(null)

  function toggleOptions (): void {
    setOptions(!options)
  }

  function toggleModalDelete (): void {
    setModalDelete(!modalDelete)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOptions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])

  return (
    <div ref={menuRef}>
      <Icon onClick={toggleOptions}><SlOptions /></Icon>

      {options && (
        <Menu>
          <div>
            <ul>
              <li>Ver Notícia</li>
              <Link to={`/noticias/editar/${newsId}`}><li>Editar</li></Link>
              <li onClick={toggleModalDelete}>Excluir</li>
            </ul>
          </div>
        </Menu>
      )}

      {modalDelete
        ? (<DeleteNews toggleModal={toggleModalDelete} newsId={newsId}/>)
        : null}
    </div>
  )
}
