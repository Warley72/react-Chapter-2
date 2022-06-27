import { Dashbord } from "./components/Dashbord";
import { Header } from "./components/Header";
import Modal from "react-modal";
import { GlobalStyle } from "./style/global";
import { useState } from "react";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleOpenNewTransactionModa() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal ={handleOpenNewTransactionModal} />

      <Dashbord />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleOpenNewTransactionModa}
      >
        <h2>Cadastrar transaçao</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}
