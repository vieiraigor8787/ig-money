import { useState } from "react";
import Modal from 'react-modal';
import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  const [isNewTransactionModal, setIsNewModalTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewModalTransactionModal(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewModalTransactionModal(false)
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="logo ig money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>Nova transação</button>

        <Modal isOpen={isNewTransactionModal} onRequestClose={handleCloseNewTransactionModal}>
          <h2>cadastrar nova transação</h2>
          </Modal>
      </Content>
    </Container>
  );
}
