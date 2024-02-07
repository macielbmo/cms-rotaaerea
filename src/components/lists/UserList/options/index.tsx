import { useState, useEffect, useRef } from 'react'

import { SlOptions } from 'react-icons/sl'
import { Icon, Menu } from './styles'
import UserDelete from '../../../Modais/userDelete'

interface OptionsProps {
  userId: string
}

export default function Options (props: OptionsProps): JSX.Element {
  const [modalDelete, setModalDelete] = useState(false)
  const [options, setOptions] = useState(false)

  const menuRef = useRef<HTMLDivElement | null>(null)

  function toggleModalDelete (): void {
    setModalDelete(!modalDelete)
  }

  function toggleOptions (): void {
    setOptions(!options)
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
          <UserDelete setModal={setModalDelete} userId={props.userId}/>
        )
        : null}
    </div>
  )
}
