import { useState } from "react";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./sytles/global";
import { TransactionsProvider } from "./TransactionsContext";

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
