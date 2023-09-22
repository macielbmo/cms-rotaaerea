import styles from './news.module.css'

export function News (): JSX.Element {
  return (
        <main className={styles.main}>
            <div className={styles.title}>
                <div>
                    <h1>Lista de noticias</h1>
                </div>
                <p>Gerencie suas noticias</p>
            </div>
            <div className={styles.btnNewNews}>
                <button >Nova Noticia</button>
            </div>
        </main>
  )
}
