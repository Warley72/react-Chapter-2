import { useState } from "react";
import Modal from "react-modal";
import { Dashbord } from "./components/Dashbord";
import { Header } from "./components/Header";
import { GlobalStyle } from "./style/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

    <Dashbord />

    <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestclose={handleCloseNewTransactionModal}
    />

    <GlobalStyle />
    </>
  );
}
