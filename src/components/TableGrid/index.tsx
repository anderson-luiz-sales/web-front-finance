// import * as C from './styles';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { PencilSquare, TrashFill } from 'react-bootstrap-icons';

function TableGrid() {

   const [data, setData] = useState<any[]>([]);

   useEffect(() => {
      axios('https://reqres.in/api/users?page=1')
         .then(res => {
            setData(res?.data?.data)
         })
         .catch(err => {
            alert('Error')
         })

   }, [])

   return (
      <Table striped bordered hover size="sm">
         <thead>
            <tr>
               <th>ID</th>
               <th>Categoria</th>
               <th>Vencimento</th>
               <th>Descrição</th>
               <th>Estabelecimento</th>
               <th>Valor</th>
               <th>Status</th>
               <th>Ações</th>
            </tr>
         </thead>
         <tbody>
            {
               data.length > 0 && data.map((item) => {
                  return (
                     <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>Sorveteria</td>
                        <td>10/10/2022</td>
                        <td>Compra de um Hula Hula</td>
                        <td>Sorveteria do zé</td>
                        <th>R$ 30,00</th>
                        <td>Pago</td>
                        <td><PencilSquare/> <TrashFill/> </td>
                     </tr>
                  )
               })
            }
         </tbody>
      </Table>
   );
}

export default TableGrid;
