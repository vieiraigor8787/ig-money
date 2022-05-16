import { useState } from "react";

import Modal from "react-modal";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { Transactions } from "./components/TransactionsTable";

import { GlobalStyle } from "./sytles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModal, setIsNewModalTransactionModal] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewModalTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewModalTransactionModal(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Transactions />
      <Modal
        isOpen={isNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>cadastrar nova transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
