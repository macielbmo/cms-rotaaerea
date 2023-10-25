import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;

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

    .btn-NewNews {
        padding: 5px 10px;
        border-radius: 7px;
        font-size: 12px;
        border: none;

        background-color: ${({ theme }) => theme.colors.primary.main};
        color: ${({ theme }) => theme.colors.primary.lighter};
        transition: all .5s;
    }

    .btn-NewNews:hover {
        background-color: ${({ theme }) => theme.colors.primary.dark};
        color: ${({ theme }) => theme.colors.primary.lighter};
        font-weight: 700;
    }

    .box-search {
        width: 100%;
        margin-top: 20px;
        background-color: white;
        height: 58px;
        padding: 15px 15px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        border-radius: 7px 7px 0 0;
    }

    .search {
        width: 30%;
    }

    .input {
        height: 100%;
        padding: 0 10px;
        border-radius: 7px;

        font-size: 12px;
        border: 1px solid ${({ theme }) => theme.colors.gray.light};
        color: ${({ theme }) => theme.colors.gray.light};
        transition: all .3s;
    }

    .input:hover {
        border-color: ${({ theme }) => theme.colors.primary.light};
    }

    .input:focus {
        border-color: ${({ theme }) => theme.colors.primary.main};
    }

    .input-select {
        height: 100%;
        display: flex;
        gap: 10px;
    }
`
