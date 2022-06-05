import { useContext } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  // const totalDeposit = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === "deposit") {
  //     return acc + transaction.amount;
  //   }

  //   return acc;
  // }, 0);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>entradas</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>{summary.deposits}</strong>
      </div>
      <div>
        <header>
          <p>saídas</p>
          <img src={outcomeImg} alt="" />
        </header>
        <strong>{summary.withdraws}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>{summary.total}</strong>
      </div>
    </Container>
  );
}
