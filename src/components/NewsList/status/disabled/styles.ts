import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;

    width: 76px;
    height: 20px;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.colors.red.lighter};
    color: ${({ theme }) => theme.colors.red.main};

    h1 {
        font-size: 11px;
    }
`
