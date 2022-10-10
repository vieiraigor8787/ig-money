import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

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
              <td width="50%">salário</td>
              <td>
                <PriceHighlight variant="income">8.000,00</PriceHighlight>
              </td>
              <td>trabalho</td>
              <td>data</td>
            </tr>

            <tr>
              <td width="50%">dia</td>
              <td>
                <PriceHighlight variant="outcome">1.000,00</PriceHighlight>
              </td>
              <td>mercado</td>
              <td>data</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
