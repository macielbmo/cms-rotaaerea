import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, NavList, MenuUser, Dropdown } from './styles'

import { AiOutlineDashboard } from 'react-icons/ai'
import { BiUserCircle, BiNews } from 'react-icons/bi'
import { HiOutlinePencilAlt, HiOutlineDocumentDuplicate } from 'react-icons/hi'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { GrDocumentConfig } from 'react-icons/gr'
import { FiUsers } from 'react-icons/fi'

import { Items } from './itemsNav'
import { ItemsDropdown } from './itemsDropdown'

export function Header (): JSX.Element {
  const [utilidades, setUtilidades] = useState(false)
  const [admin, setAdmin] = useState(false)

  function toogleResetNav (): void {
    setUtilidades(false)
    setAdmin(false)
  }

  function toogleUtilidades (): void {
    setUtilidades(!utilidades)
    setAdmin(false)
  }

  function toogleAdmin (): void {
    setAdmin(!admin)
    setUtilidades(false)
  }

  return (
    <Container>
      <div className="box-header">

        <Link to={'/'}>
          <h1 className="title" onClick={toogleResetNav}>
                        Rota Aérea
          </h1>
        </Link>

        <NavList>
          <Link to={'/'} onClick={toogleResetNav}>
            <Items chieldren={<AiOutlineDashboard/>} name="Painel"/>
          </Link>

          <div className="item" onClick={toogleUtilidades}>
            <Items chieldren={<HiOutlinePencilAlt />} name="Utilidades"/>
          </div>

          <div className="item" onClick={toogleAdmin}>
            <Items chieldren={<MdOutlineAdminPanelSettings/>} name="Admin"/>
          </div>
        </NavList>

        <MenuUser>
          <BiUserCircle className="icon" />
          <h6>Maciel</h6>
        </MenuUser>
      </div>

      {utilidades
        ? (

          <Dropdown>
            <div className='slider'>
              <Link to={'/noticias'}>
                <ItemsDropdown chieldren={<BiNews/>} name="Noticias"/>
              </Link>

              <Link to={'/categories'}>
                <ItemsDropdown chieldren={<HiOutlineDocumentDuplicate/>} name="Categorias"/>
              </Link>
            </div>
          </Dropdown>

          )
        : null}

      {admin
        ? (

          <Dropdown>
            <div className="slider">
              <Link to={'/usuarios'}>
                <ItemsDropdown chieldren={<FiUsers />} name="Usuarios"/>
              </Link>

              <Link to={'/configuracao'}>
                <ItemsDropdown chieldren={<GrDocumentConfig />} name="Configuração"/>
              </Link>
            </div>
          </Dropdown>

          )
        : null}
    </Container>
  )
}
