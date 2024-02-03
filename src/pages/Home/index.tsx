import styles from './dashboard.module.css'
import Button from '@mui/material/Button'

export function Home (): JSX.Element {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Olá, seja bem vido!</h1>
      <Button variant='contained'>Olá Mundo</Button>
    </main>
  )
}
