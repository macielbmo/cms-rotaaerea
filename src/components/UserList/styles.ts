import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 20px;
    background-color: white;
    padding: 10px;
    border-radius: 5px;

    table {
        width: 100%;
        border-collapse: collapse;
    }

    thead {
        color: #3A3A3A;
        padding: 10px;
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
        font-size: 14px;
    }

    .action {
        display: flex;
        gap: 10px;
    }

    .btn-action {
        cursor: pointer;
        font-size: 18px;
    }
`
