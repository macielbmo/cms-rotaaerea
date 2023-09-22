import { createGlobalStyle } from 'styled-components'
import styles from './themes/default'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
    }

    body {
        background: ${styles.backgroundColor};
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }
`
