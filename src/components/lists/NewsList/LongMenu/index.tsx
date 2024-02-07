import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Link } from 'react-router-dom'

interface LongMenuProps {
  newsId: string
  status: boolean
}

const ITEM_HEIGHT = 48

export default function LongMenu (props: LongMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  async function handleClcikStatus (): Promise<void> {
    handleClose()

    const data = {
      status: !props.status
    }

    try {
      const URL = process.env.API_URL
      const response = await fetch(`${URL}/news/updatestatus/${props.newsId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error('Erro ao carregar os dados')
      }
    } catch (error) {
      console.error('Erro ao carregar os dados:', error)
    }

    window.location.reload()
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch'
          }
        }}
      >
        <Link to={`/noticias/editar/${props.newsId}`} onClick={handleClose}>
          <MenuItem key={'editar'} >
            Editar
          </MenuItem>
        </Link>

        <MenuItem key={'editar'} onClick={handleClcikStatus}>
          {props.status ? ('Desativar') : ('Ativar')}
        </MenuItem>
      </Menu>
    </div>
  )
}
