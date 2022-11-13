import * as C from './styles';
import { CashStack } from 'react-bootstrap-icons';

function BoxValueSalary() {

   return (
      <C.Container>
         <C.CircleIcon><CashStack/></C.CircleIcon>
         <C.BoxValue>
            <C.Title>Renda Mesal</C.Title>
            <C.Value>R$ 5200,00</C.Value>
         </C.BoxValue>
      </ C.Container>
   );
}

export default BoxValueSalary;