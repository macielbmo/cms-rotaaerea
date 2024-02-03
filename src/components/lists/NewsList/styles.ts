import styled from 'styled-components'

export const Container = styled.div`
    background-color: #FDFCFC;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
    margin-bottom: 64px;

    .table-head {
      background-color: #e0e0e0;
    }

    .collumn-title {
      font-weight: 900;
      width: 30%;
    }

    .collumn-status {
      display: flex;
      justify-content: flex-end;
    }

    .table-footer {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      margin: 25px 0 10px;

      button:hover {
        background: ${({ theme }) => theme.colors.gray.lighter};
        color: ${({ theme }) => theme.colors.gray.dark};
      }
    }

    .link-components {
      a {
        text-decoration: none; /* Remove sublinhado padrão */
        color: inherit; /* Herda a cor do texto do elemento pai */
        cursor: pointer; /* Muda o cursor para indicar que é clicável */
      }

      a:hover {
        color: inherit; /* Herda a cor do texto no estado de hover */
      }
    }
`
