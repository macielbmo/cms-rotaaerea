import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;

  .modal {
      background-color: #FFF;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

      height: 250px;
      width: 300px;
      border-radius: 10px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 25px;
  }

  .modal img {
      width: 90px;
  }

  .modal p {
      text-align: center;
  }

  .boxBtn {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
  }

  .btnCadastrar, .btnCancelar {
      padding: 5px 10px;
      border-radius: 10px;
      border: none;
      color: white;
      transition: .5s;
  }

  .btnCancelar {
      background-color: rgb(255, 162, 162);
  }

  .btnCancelar:hover {
      background-color: rgb(255, 113, 113);
  }

  .btnCadastrar {
      background-color: #3366FF;
  }

  .btnCadastrar:hover {
      background-color: #134eff;
  }

  .loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;
  }

  .spinner {
    animation: spin 1s linear infinite;
    font-size: 48px;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .mensage-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }

  .btnExit {
    padding: 5px 10px;
    border-radius: 10px;
    border: none;
    color: white;
    transition: .5s;
    background-color: #7FE881;
  }

  .btnExit:hover {
    background-color: #5BC980;
  }
`
