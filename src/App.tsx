import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";


function App() {

  const [isNewTransactionModalOpen, setisNewTransactionModalOpen ] = useState(false);

  function handleOpenNewTransactionModal() {
      setisNewTransactionModalOpen(true);
  }


  function handleCloseNewTransactionModal() {
      setisNewTransactionModalOpen(false);
  }


  return (
    <>
        <GlobalStyle />

        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        
        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}

        />

        <Dashboard />
    </>
  );
}

export default App;
