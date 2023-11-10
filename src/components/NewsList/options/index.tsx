import { useState, useEffect, useRef } from 'react'

import { SlOptions } from 'react-icons/sl'
import { Icon, Menu } from './styles'
import { DeleteNews } from '../../Modais/deleteNews'

interface OptionsProps {
  newsId: string
}

export default function Options ({ newsId }: OptionsProps): JSX.Element {
  const [modalDelete, setModalDelete] = useState(false)
  const [options, setOptions] = useState(false)

  const menuRef = useRef(null)

  function toggleOptions (): void {
    setOptions(!options)
  }

  function toggleModalDelete (): void {
    setModalDelete(!modalDelete)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOptions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={menuRef}>
      <Icon onClick={toggleOptions}><SlOptions /></Icon>

      {options && (
        <Menu>
          <div>
            <ul>
              <li>Ver detalhes</li>
              <li>Editar</li>
              <li onClick={toggleModalDelete}>Excluir</li>
            </ul>
          </div>
        </Menu>
      )}

      {modalDelete
        ? (
          <DeleteNews setModal={setModalDelete} newsId={newsId}/>
        )
        : null}
    </div>
  )
}
