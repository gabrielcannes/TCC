import React, {Component} from "react";
import LeitorArquivo from './Components/LeitorArquivo.jsx';

class App extends Component { 

   buscaArquivo = () => {
    //funciona ao apertar o botão
  }

  render() { 
    return (
      <section>
        <LeitorArquivo></LeitorArquivo>
      </section>
    )
  }
}

export default App