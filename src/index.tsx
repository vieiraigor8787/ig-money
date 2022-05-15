import { createRoot } from "react-dom/client";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "trans1",
          amount: 400,
          type: "deposit",
        },
      ];
    });
  },
});

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(<App />);
