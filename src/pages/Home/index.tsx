import styles from './dashboard.module.css'

export function Dashboard (): JSX.Element {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Olá, seja bem vido!</h1>
    </main>
  )
}
