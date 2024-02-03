import { useState } from 'react'
import type React from 'react'

// css
import { Container } from './styles'

// Componentes
import Options from './options'
import ActiveStatus from './status/active'
import DisabledStatus from './status/disabled'

// Components Options MUI
import { styled, alpha } from '@mui/material/styles'
import Menu, { type MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EditIcon from '@mui/icons-material/Edit'
import ArchiveIcon from '@mui/icons-material/Archive'
import FileCopyIcon from '@mui/icons-material/FileCopy'

// Components Table MUI
import { Button, Table, TableFooter } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

// Icon
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Link } from 'react-router-dom'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    }
  }
}))

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

export function NewsList ({ news }: UserListProps): JSX.Element {
  const [sizeList, setSizeList] = useState(10)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }

  function plusList (): void {
    setSizeList(sizeList + 10)
  }

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
                  <IconButton
                    className='icon-options'
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}>
                    <MoreVertIcon />
                  </IconButton>

                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      'aria-labelledby': 'demo-customized-button'
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <Link to={`/noticias/editar/${row.id}`} className='link-components'>
                      <MenuItem onClick={handleClose} disableRipple>
                        <EditIcon />
                        Editar
                      </MenuItem>
                    </Link>

                    <Link to={''}>
                      <MenuItem onClick={handleClose} disableRipple>
                        <FileCopyIcon />
                        Desativar
                      </MenuItem>
                    </Link>

                  </StyledMenu>
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
