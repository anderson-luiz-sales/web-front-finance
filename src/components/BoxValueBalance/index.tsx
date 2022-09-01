import * as C from './styles';

function BoxValueBalance() {

   return (
      <C.Container>
         <C.CircleIcon>+</C.CircleIcon>
         <C.BoxValue>
            <C.Title>Saldo Total</C.Title>
            <C.Value>R$ 2002,00</C.Value>
         </C.BoxValue>
      </ C.Container>
   );
}

export default BoxValueBalance;