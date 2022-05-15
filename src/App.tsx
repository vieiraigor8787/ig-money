import styled from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyle } from "./sytles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <h1>hello world</h1>
    </>
  );
}
