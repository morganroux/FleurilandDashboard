import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import OrderItem from './OrderItem';

type OrdersProps = {
    orders:any
}

const OrderTable: React.FC<OrdersProps> = (props) => {
    const { orders } = props;
    return (
        <div {...props}>
        <Table stickyHeader size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Numéro de Commande</TableCell>
                    <TableCell>Nom</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date de commande</TableCell>
                    <TableCell align="center">Expédition</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orders.map((order) => {
                    return (
                    <OrderItem 
                        key = {order.id}
                        order={order}
                    />)}
                )}
            </TableBody>
        </Table>
        </div>
)}
   
export default OrderTable;