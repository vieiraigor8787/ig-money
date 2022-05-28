
import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
  const transactions = useContext(TransactionsContext);

  console.log(transactions)


  return (
    <Container>
      <div>
          <header>
              <p>entradas</p>
              <img src={incomeImg} alt="" />
          </header>
          <strong>R$ xxxx,xx</strong>
      </div>
      <div>
          <header>
              <p>saídas</p>
              <img src={outcomeImg} alt="" />
          </header>
          <strong>R$ xxxx,xx</strong>
      </div>
      <div className="highlight-background">
          <header>
              <p>total</p>
              <img src={totalImg} alt="" />
          </header>
          <strong>R$ xxxx,xx</strong>
      </div>
    </Container>
  );
}
