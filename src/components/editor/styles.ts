import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    .ql-editor {
        height: 92vh;
        overflow: auto;
    }

    .ql-editor::-webkit-scrollbar {
        width: 8px; /* Largura da barra de rolagem */

    }
    .ql-editor::-webkit-scrollbar-thumb {
        background-color: #888; /* Cor da alça da barra de rolagem */
        border-radius: 5px
    }

    .ql-editor::-webkit-scrollbar-thumb:hover {
        background-color: #555; /* Cor da alça da barra de rolagem ao passar o mouse */
    }

    .quill {
        position: relative;
    }

    /* Estilize a barra de ferramentas fixa como desejar */
    .quill .ql-toolbar {
        position: sticky;
        top: 0;
        background-color: #fff; /* Cor de fundo da barra de ferramentas */
        z-index: 999; /* Certifique-se de que a barra de ferramentas esteja acima de outros elementos */
    }

    .ql-toolbar {
        border-radius: 5px 5px 0 0;
        border: 2px solid ${({ theme }) => theme.colors.gray.light};
    }

    .ql-container {
        border: 1px solid ${({ theme }) => theme.colors.gray.light};
        border-radius: 0 0 5px 5px
    }

`
