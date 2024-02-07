import { useState } from 'react'

// css
import { Container } from './styles'

// Componentes
import Options from './options'
import ActiveStatus from './status/active'
import DisabledStatus from './status/disabled'

// Components Table MUI
import { Button, Table, TableFooter } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import LongMenu from './LongMenu'

interface UserListProps {
  news: [{
    id: string
    title: string
    author: string
    category: string
    category_news_name: string
    created_at: string
    status: boolean
  }]
}

const optionsMenu = [
  'Editar',
  'Ativar',
  'Desativar'
]

export function NewsList ({ news }: UserListProps): JSX.Element {
  const [sizeList, setSizeList] = useState(10)

  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }

  function plusList (): void {
    setSizeList(sizeList + 10)
  };

  return (
    <Container>
      <TableContainer component={Paper} className='table'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className='table-head'>
            <TableRow>
              <TableCell>Titulo</TableCell>
              <TableCell align="right">Categoria</TableCell>
              <TableCell align="right">Redator</TableCell>
              <TableCell align="right">Data de Postagem</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align='right'>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {news.slice(0, sizeList).map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" className='collumn-title'>
                  {row.title}
                </TableCell>

                <TableCell align="right">
                  {row.author}
                </TableCell>

                <TableCell align="right">
                  {row.category_news_name}
                </TableCell>

                <TableCell align="right">
                  {new Intl.DateTimeFormat('pt-BR', options).format(new Date(row.created_at))}
                </TableCell>

                <TableCell align="right">
                  <div className='collumn-status'>
                    {row.status
                      ? (
                        <ActiveStatus />
                      )
                      : <DisabledStatus />}
                  </div>
                </TableCell>

                <TableCell align='right'>
                  <LongMenu
                    key={row.id}
                    newsId={row.id}
                    status={row.status}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TableFooter className='table-footer'>
          {sizeList < news.length && (
            <Button variant='contained' onClick={plusList}>Mais notícias</Button>
          )}
        </TableFooter>

      </TableContainer>
    </Container>
  )
}
