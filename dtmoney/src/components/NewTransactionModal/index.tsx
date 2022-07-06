import Modal from "react-modal";
import incomeImg from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { useState } from "react";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestclose: () => void;
}

export function NewTransactionModal({isOpen, onRequestclose}: NewTransactionModalProps) {
  
  const [type, setType] = useState('deposit');

  function handleSetTypeDeposit() {}

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
      <img src={closeImg} alt="fechar modal"/>
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Titulo"
        />

        <input 
          type="number"
          placeholder="number"
        />

          <TransactionTypeContainer>
            <RadioBox
            type="button"
            onClick={() => {setType('deposit');}}
            isActive={type === 'deposit'}
            activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>

            </RadioBox>

            <RadioBox
            type="button"
            onClick={() => {setType('withdraw');}}
            isActive={type === 'withdraw'}
            activeColor="red"
            >
              <img src={outcome} alt="Saida" />
              <span>Saida</span>

            </RadioBox>
          </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
