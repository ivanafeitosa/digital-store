import { useState } from "react";
import Paths from "./routes";
import { LoginContext } from "./contexts/LoginContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";


const App = () => {
  const [estaLogado, setEstaLogado] = useState(false);
  const [produtos, setProdutos] = useState([]);

  return (
    <>
      <LoginContext.Provider value={{ estaLogado, setEstaLogado, produtos, setProdutos }}>
        <QueryClientProvider client={queryClient}>
          <Paths />
        </QueryClientProvider>
      </LoginContext.Provider>

    </>
  );
}

export default App;