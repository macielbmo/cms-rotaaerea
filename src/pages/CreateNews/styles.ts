import styled from 'styled-components'

export const Container = styled.div`
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
    }

    .header h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.colors.primary.dark};
    }

    form {
        display: flex;
        justify-content: space-between;

        border-radius: 5px;
        padding: 20px;
        margin-top: 20px;
        margin-bottom: 50px;

        background-color: white;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.09);
    }

    .form-news {
        width: 68%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 15px;
    }

    .input {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 90%;

        font-size: 14px;
    }

    .input input {
        height: 30px;
        padding: 4px 8px;
        border: 2px solid ${({ theme }) => theme.colors.gray.light};
        border-radius: 5px;
    }

    .form-sider {
        width: 30%;
    }

    .form-sider h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.colors.primary.dark};
        margin-bottom: 10px;
    }

    .button-publish {
        width: 100%;
        height: 45px;
        border: none;

        margin-top: 15px;

        background-color: #3366FF;
        color: #fff;

        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;

        transition: all .3s;
    }

    .button-publish:hover {
        background-color: #3337FF;
    }
`
