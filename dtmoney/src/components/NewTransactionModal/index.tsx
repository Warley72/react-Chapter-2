import { FormEvent, useState } from "react";

import Modal from "react-modal";
import incomeImg from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";

import { api } from "../../services/api";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestclose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestclose,
}: NewTransactionModalProps) {
  const [title, setTile] = useState("");
  const [value, setvalue] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    };

    api.post('/transactions', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestclose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestclose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTile(event.target.value)}
        />

        <input
          type="number"
          placeholder="number"
          value={value}
          onChange={(event) => setvalue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcome} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
