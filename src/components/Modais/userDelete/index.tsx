import React, { useState, useEffect } from 'react'

import styles from './userDelete.module.css'
import imgAttention from './attention.png'

interface ModalProps {
  setModal: () => void
}

export function UserDelete ({ setModal }: ModalProps): JSX.Element {
  const [send, setSend] = useState(false)

  function handlesend (): void {
    setSend(!send)
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <img src={imgAttention} alt="" />
        <p>Você realmente deseja excluir esse cadastro?</p>

        <div className={styles.boxBtn}>
          <button className={styles.btnCancelar} type="submit" onClick={setModal}>Não excluir</button>
          <button className={styles.btnCadastrar} type="submit" onClick={handlesend}>Sim, Excluir</button>
        </div>
      </div>

    </div>
  )
}
