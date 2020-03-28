/* - useState 
    - será usado para transformar uma variavel comum em estado (let counter = useState(0);)
    - é uma função que retorna um array de 2 posições
    - Array[valor,função de atualização]
    - Essa "função de atualização" é responsavel por alterar efetivamente o valor da        variavel que está fazendo o papel de estado
*/
import React, {useState} from 'react';
import Header from './Header';

/* JSX 
Quando escrevemos um código HTML dentro de um script Js
chamamos ele de JSX (JavaScript XML)
*/

/*Componente no React
 - Função que retorna HTML
 - Ex:
     - O <header> é uma tag do HTML
     - A partir do momento que eu crio uma função "function Header()" ele se torna um componente do React.
     - Os parametros da função são atributos importados do HTML como o "title" por exemplo, a partir do momento que esses atributos são importados como parâmetros eles recebem o nome de propriedades react.
*/




function AppTeorico() {
  /*estado: está fazendo a decomposição do array de retorno em 1 varivel e 1 função counter armazena o valor do esetado e setCounter é a função que atualiza o counter*/
  let [counter,setCounter]= useState(0);

  function increment(){
    setCounter(counter+1);
  }

  return (
    <div> 
       {/* /* - usando o title como propriedade para passar informação pro componente Header
       - para acessa-lo dentro do Header, seria necessário colocar como parâmatro "props.title"
      <Header title="Semana OminiStack"/> 
      */ }

    {/*Utilizado o children (o que vai dentro da tag HTML) para passar como propriedade para o componente Header*/}
      <Header>
        Contador: {counter}
      </Header>
      <button onClick = {increment}>
        Incrementar
      </button>
    </div>
   
  );
}

export default App;
