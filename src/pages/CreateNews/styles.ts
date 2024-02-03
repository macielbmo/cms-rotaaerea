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
        flex-direction: column;
        justify-content: space-between;

        border-radius: 5px;
        padding: 20px;
        margin-top: 20px;
        margin-bottom: 50px;

        background-color: white;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.09);
    }

    .section-one {
      display: flex;
      gap: 24px;
      width: 100%;
    }

    .row-1 {
      width: 60%;

      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .form-news {
        width: 100%;
        display: flex;

        flex-direction: column;
        justify-content: flex-start;
        gap: 15px;

        font-size: 14px;
    }

    .title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 18px;
    }

    .input-content label{
      margin-bottom: 5px;
      font-size: 18px;
    }

    .source-news {
      display: flex;
      gap: 18px;
    }

    .row-2 {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .input-image label{
      font-size: 18px;
    }

    .input-image .source-img {
      margin-top: 14px;
    }

    .category-select > label{
      font-size: 18px;
    }

    .select-category {
      margin-top: 10px;
    }

    .buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 25px;
    }

    .button-publish:hover {
        background-color: #3337FF;
    }

    .select-category {
      display: flex;
      flex-direction: column;
      gap: 15px
    }

    .alert {
      position: fixed;
      top: 70px;
      right: 0;
      width: 300px;
      z-index: 1;
      transition: .5s;
    }
`
