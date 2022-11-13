import * as C from './styles';
import { HouseFill, CashCoin, Calendar3, Clipboard2Data } from 'react-bootstrap-icons';

function NavBar() {

   return (
      <C.Container>
         
         <C.IconHouse>
            <HouseFill />
         </C.IconHouse>
         <C.StyledLink to="/">
               Home
         </C.StyledLink>

         <C.IconCashCoin>
            <CashCoin />
         </C.IconCashCoin>
         <C.StyledLink to="/financial">
            Financeiro
         </C.StyledLink>

         <C.IconCalendar>
            <Calendar3 />
         </C.IconCalendar>
         <C.StyledLink to="">
            Agenda
         </C.StyledLink>

         <C.IconCashClipboard2Data>
            <Clipboard2Data />
         </C.IconCashClipboard2Data>
         <C.StyledLink to="">
            Relatório
         </C.StyledLink>

      </ C.Container>
   );
}

export default NavBar;