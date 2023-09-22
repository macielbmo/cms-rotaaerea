import styled from 'styled-components'

export const Container = styled.div`
    background-color: white;
    margin-top: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
    width: 100%;

    h4 {
        font-size: 20px;
        color: #4B4B4B;
    }

    .search {
        margin: 15px 0;
        width: 100%;
    }

    .search input {
        width: 30%;
        height: 30px;
        padding: 8px;
        border: none;
        border-bottom: 1px solid #bfbfbf;
        transition: all .5s;
    }

    .search input:hover {
        border-color: #3366FF;
    }

    .search input:focus {
        outline: none;
        border-color: #3366FF;
    }

    .box-input-radio {
        display: flex;
        gap: 10px;
        font-size: 15px;
        text-transform: lowercase;
    }

    .box-input-radio label {
        display: flex;
        align-items: center;
        gap: 3px;
    }
`
