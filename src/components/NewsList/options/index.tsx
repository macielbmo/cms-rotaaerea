import { useState, useEffect, useRef } from 'react'

import { SlOptions } from 'react-icons/sl'
import { Icon, Menu } from './styles'

export default function Options (): JSX.Element {
  const [options, setOptions] = useState(false)
  const menuRef = useRef(null)

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
              <li>Excluir</li>
            </ul>
          </div>
        </Menu>
      )}
    </div>
  )
}
