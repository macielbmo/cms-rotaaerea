import styled from 'styled-components'

export const Icon = styled.span`
    width: 100%;
    height: 100%
`

export const Menu = styled.div`
    position: fixed;
    right: 4%;

    div {
        width: 120px;
        height: 115px;
        border-radius: 5px;
        padding: 8px;

        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
        background-color: ${({ theme }) => theme.colors.backgroundColor};
    }

    ul {
        list-style: none;
        color: ${({ theme }) => theme.colors.primary.dark};
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    li {
        padding: 5px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
        transition: all .3s;
    }

    li:hover {
        border-radius: 5px;
        color: ${({ theme }) => theme.colors.primary.lighter};
        font-weight: 700;
        background-color: ${({ theme }) => theme.colors.primary.light};
    }
`
