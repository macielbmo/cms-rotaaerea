import styles from './login.module.css'
import bg from './bg.jpg'

export function Login (): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <form className={styles['login-modal']}>
          <h1 className={styles.title}>Login</h1>

          <div className={styles.modal}>
            <label className={styles['label-text']} htmlFor="email">E-mail</label>
            <input className={styles['input-text']} type="email" id="email" />

            <label className={styles['label-text']} htmlFor="password">Senha</label>
            <input className={styles['input-text']} type="password" name="password" id="password" />

            <div className={styles.inputSecundary}>
              <div>
                <input type="checkbox" name="fixe-login" id="fixe-login" />
                <label htmlFor="fixe-login">Mantenha-me logado</label>
              </div>
              <a href="">Esqueceu sua senha?</a>
            </div>

            <button className={styles.button} type="submit">Entrar</button>
          </div>
        </form>

        <div className={styles['login-img']}>
          <img className={styles['img-bg']} src={bg} alt="" />
        </div>
      </div>
    </>
  )
}
