import { useState, useEffect } from 'react'

import { Main } from '../../assets/styles/global'
import { Container } from './styles'
import { CategoryList } from '../../components/CategoryList'
import { CategoryRegistration } from '../../components/Modais/categoryRegistration'

export function Categories (): JSX.Element {
  const [modal, setModal] = useState(false)
  const [categories, setCategories] = useState([])

  function toggleModal (): void {
    setModal(!modal)
  }

  useEffect(() => {
    fetch('http://localhost:3001/categories')
      .then(async (response) => {
        const json = await response.json()

        setCategories(json)
      })
      .catch((error) => {
        console.log('erro', error)
      })
  }, [])

  return (
    <Main>
      <Container>
        <div className='header'>
          <h1>Lista de categorias</h1>

          <button onClick={toggleModal} className='btn-NewNews'>Nova categoria</button>
        </div>

        {modal
          ? (
            <CategoryRegistration setModal={toggleModal}/>)
          : null}

        <div className='box-search'>
          <input className='input search' type="search" placeholder='Pesquisar...'/>

          <div className='input-select'>
            <select className='input' name="status" id="status">
              <option value="all">Todos</option>
              <option value="ativo">Ativo</option>
              <option value="desativado">Desativado</option>
            </select>
          </div>
        </div>

        <CategoryList categorys={categories}/>
      </Container>
    </Main>
  )
}
