import TableGrid from '../../components/TableGrid';
import * as C from './styles';
import BoxValueSalary from '../../components/BoxValueSalary'
import BoxValueValuePay from '../../components/BoxValuePay'

import BoxValueBalance from '../../components/BoxValueBalance';

function FinancialMoviment() {
   return (
      <C.Container>
         <C.BoxComponent>
            <BoxValueSalary />
            <BoxValueValuePay />
            <BoxValueBalance />
         </C.BoxComponent>
         <TableGrid />
      </C.Container>
   );
}

export default FinancialMoviment;
