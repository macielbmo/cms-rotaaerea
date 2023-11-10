import styled from 'styled-components'

export const Container = styled.div`
    background-color: #FDFCFC;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);

    table {
        width: 100%;
        border-collapse: collapse;
    }

    thead {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.primary.dark};
        background-color: ${({ theme }) => theme.colors.backgroundColor};
        text-align: left;
    }

    .row {
        padding: 10px;
        border: none;
        border-bottom: 1px solid #ccc;
    }

    .row th {
        padding: 7px;
        font-weight: 600;
    }

    .row td {
        padding: 7px;
        font-size: 13px;
        color: ${({ theme }) => theme.colors.primary.dark};
    }

    .row .title {
        font-weight: 700;
        font-size: 14px;
        max-width: 200px;
        word-wrap: break-word;
    }

    .options {
        cursor: pointer;
        width: 35px;
        height: 100%;
    }

    .btn-action {
        cursor: pointer;
        font-size: 18px;
    }
`
