import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    height: 100vh;

    .login-img {
        flex: 1;
        overflow: hidden;
    }

    .img-bg {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .login-modal {
        flex: 0.35;
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .title {
        color: #1677ff;
        margin-bottom: 30px;
    }

    .modal {
        margin: 0;
    }

    .box-input {
      width: 100%;
    }

    .input {
      width: 100%;
      margin-bottom: 15px;
    }

    .inputSecundary {
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .inputSecundary div, .inputSecundary a {
        margin: 0;
        display: flex;
        align-items: center;
    }

    .inputSecundary div label{
        margin-left: 5px;
        cursor: pointer;
    }

    .inputSecundary a{
        cursor: pointer;
    }

    .checkbox span{
      font-size: 14px;
    }

    .button {
        width: 100%;
        height: 40px;
        background-color: #1677ff;
        border: none;

        font-size: 16px;
        font-weight: 600;
        color: white;
        transition: .5s;
    }

    .button:hover {
        background-color: #0958D9;
    }
`
