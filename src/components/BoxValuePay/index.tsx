import * as C from './styles';
import { DashCircleFill } from 'react-bootstrap-icons';

function BoxValuePay() {

   return (
      <C.Container>
         <C.CircleIcon><DashCircleFill/></C.CircleIcon>
         <C.BoxValue>
            <C.Title>Total a Pagar</C.Title>
            <C.Value>R$ 2970,83</C.Value>
         </C.BoxValue>
      </ C.Container>
   );
}

export default BoxValuePay;