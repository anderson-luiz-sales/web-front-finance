import * as C from './styles';
import { PlusCircleFill } from 'react-bootstrap-icons';


function BoxValueBalance() {

   return (
      <C.Container>
         <C.CircleIcon><PlusCircleFill/></C.CircleIcon>
         <C.BoxValue>
            <C.Title>Saldo Total</C.Title>
            <C.Value>R$ 2002,00</C.Value>
         </C.BoxValue>
      </ C.Container>
   );
}

export default BoxValueBalance;