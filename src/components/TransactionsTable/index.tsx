import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function Transactions() {
  useEffect(() => {
    api("transactions").then((res) => console.log(res.data));
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
          <tr>
            <td>exemplo</td>
            <td className="deposit">R$ xxx,xx</td>
            <td>exemplo</td>
            <td>xx/xx/xxxx</td>
          </tr>
          <tr>
            <td>exemplo</td>
            <td className="withdrow">- R$ xxx,xx</td>
            <td>exemplo</td>
            <td>xx/xx/xxxx</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
