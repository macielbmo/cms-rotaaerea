import styled from 'styled-components'

export const Container = styled.div`
    margin: 7px 0;

    h2 {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 10px;
    }

    .no-image {
        background-color: ${({ theme }) => theme.colors.gray.main};
        width: 100%;
        height: 200px;
        border-radius: 5px 5px 0 0;

        display: flex;
        align-items: center;
        justify-content: center;

        color: ${({ theme }) => theme.colors.primary.lighter};
    }

    .box-image {
      width: 100%;
      height: auto;
      border-radius: 5px 5px 0 0;
      border: 1px solid #CDD7E1;

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

    .button-upload-img input[type="file"] {
      display: none;
    }

    .button-upload-img label {
      padding: 8px 15px;
      font-size: 14px;
      cursor: pointer;
      border: 1px solid #CDD7E1;
      border-radius: 0 0 5px 5px;
      transition: all .5s;

      display: flex;
      justify-content: center;
      gap: 10px;
      align-items: center;
    }

    .button-upload-img label:hover {
      background-color: #f0f4f8;
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
