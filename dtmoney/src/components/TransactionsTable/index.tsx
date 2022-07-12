import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
    id: number;
    title: string;
    amount: string;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable() {
  const [transactions, settransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => settransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr>
              <td>Desenvolvimento de website</td>
              <td className="deposit">R$12.000</td>
              <td>Desenvolvimento</td>
              <td>20/02/2022</td>
            </tr>   
          ))}
        </tbody>
      </table>
    </Container>
  );
}
