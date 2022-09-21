import * as C from './styles';
import { HouseFill, CashCoin, Calendar3, Clipboard2Data } from 'react-bootstrap-icons';
// import { Link } from 'react-router-dom'

function NavBar() {

   return (
      <C.Container>
         <C.IconHouse>
            <HouseFill />
         </C.IconHouse>
         <C.TitleHome>
            Home
         </C.TitleHome>
         <C.IconCashCoin>
            <CashCoin />
         </C.IconCashCoin>
         <C.TitleFinance>
            Financeiro
         </C.TitleFinance>
         <C.IconCalendar>
            <Calendar3 />
         </C.IconCalendar>
         <C.TitleCalendar>
            Agenda
         </C.TitleCalendar>
         <C.IconCashClipboard2Data>
            <Clipboard2Data />
         </C.IconCashClipboard2Data>
         <C.TitleReport>
            Relatório
         </C.TitleReport>
      </ C.Container>
   );
}

export default NavBar;