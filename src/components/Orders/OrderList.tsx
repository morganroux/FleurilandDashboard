import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const OrderList: React.FC = (props) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Numéro de Commande</TableCell>
                    <TableCell>Nom</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="center">Expédition</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.children}
            </TableBody>
        </Table>
)}
   
export default OrderList;