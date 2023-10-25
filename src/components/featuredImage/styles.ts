import styled from 'styled-components'

export const Container = styled.div`
    margin: 7px 0;

    h2 {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 10px;
    }

    .no-image {
        background-color: ${({ theme }) => theme.colors.gray.main};
        width: 30%;
        height: 200px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: ${({ theme }) => theme.colors.primary.lighter};

        margin-bottom: 5px;
    }

    .box-image {
      width: 30%;
      aspect-ratio: 16 / 9;

      position: relative;
      overflow: hidden;
    }

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }

    .input-upload-image {
      margin-top: 10px;
    }

    .description {
        width: 60%;
        margin-top: 15px;

        font-size: 16px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.gray.main};
    }

    .description input {
        margin-top: 4px;
        width: 100%;
        height: 30px;
        padding: 4px 8px;

        border: 2px solid ${({ theme }) => theme.colors.gray.light};
        border-radius: 5px;
    }
`
