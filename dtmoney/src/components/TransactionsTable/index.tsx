import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
useEffect(() => {
    api.get('transactions')
        .then(response => console.log(response.data))
}, []);

    return(
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
                    <tr>
                        <td>salario</td>
                        <td className="deposit">5000.00</td>
                        <td>Trabalho</td>
                        <td>20/06/2022</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-1100.00</td>
                        <td>Casa</td>
                        <td>25/06/2022</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    );
}