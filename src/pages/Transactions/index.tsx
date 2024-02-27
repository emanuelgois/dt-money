import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "../components/SearchForm";
import { PriceHightlight, TransactionsContainer, TransactionsTable } from "./styles";


export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />  

      <TransactionsContainer>

      <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">
                Desenvolvimento de site
              </td>
              <td>
                <PriceHightlight variant="income">
                    R$ 12.000,00
                </PriceHightlight>
              </td>
              <td>Venda</td>
              <td>26/02/2024</td>
            </tr>
            <tr>
              <td width="50%">Hamburger</td>
              <td>
                <PriceHightlight variant="income">
                  R$ -50,00
                </PriceHightlight>
              </td>
              <td>Alimentação</td>
              <td>11/02/2024</td>
            </tr>
          </tbody>

        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}