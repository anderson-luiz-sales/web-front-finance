// import TableGrid from "../../components/TableGrid";
import BoxValueSalary from "../../components/BoxValueSalary";
import BoxValueBalance from "../../components/BoxValueBalance";
import BoxValuePay from "../../components/BoxValuePay";
import * as C from './styles';

function FinancialMoviment() {
   return (
      <C.BoxValueContainer>
         <BoxValueSalary />
         <BoxValueBalance />
         <BoxValuePay />
      </C.BoxValueContainer>
   );
}

export default FinancialMoviment;
