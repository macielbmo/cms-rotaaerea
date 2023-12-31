import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-size: 18px;
  }

  input {
    height: 35px;
    padding: 4px 8px;
    border: 2px solid ${({ theme }) => theme.colors.gray.light};
    border-radius: 5px;
  }
`
