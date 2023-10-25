import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.gray.lighter};
    padding: 10px 15px;

    h2 {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.gray.main};
        margin-bottom: 10px;
    }

    .no-image {
        background-color: ${({ theme }) => theme.colors.gray.main};
        width: 75%;
        height: 200px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: ${({ theme }) => theme.colors.primary.lighter};

        margin-bottom: 5px;
    }

    .image {
        width: 100%;
    }

    .description {
        width: 100%;
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
