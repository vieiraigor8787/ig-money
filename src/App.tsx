import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Transactions } from "./components/TransactionsTable";
import { GlobalStyle } from "./sytles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
      <Transactions />
    </>
  );
}
