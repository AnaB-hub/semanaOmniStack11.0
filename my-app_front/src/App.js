import React from 'react';

import './global.css';

import Routes from './routes';

function App() {

  //Não é possível alterar o valor do estado de forma direta. Ex: counter++
  // const [counter, setCounter] = useState(0);

  // //useState retorna um array [valor, funcaoDeAtualizacao]

  // function increment() {
  //   setCounter(counter + 1);
  // }

  return (
    // <Header title="Semana OmniStack"/>
    /* <Header>Contador: { counter }</Header>
    <button onClick={increment}>Incrementar</button> */
    
    <Routes/>
  );
}

export default App;