import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import OrderItem from './OrderItem';
import { TableSortLabel } from '@material-ui/core';

interface TableProps {
    orders:any
}

interface HeadProps {
    orderBy: number
    orderDir: any
}
const OrderHead: React.FC<HeadProps> = ({orderBy, orderDir}) => {
    const heads:string[]= ["N°", "Nom", "Total", "Status", "Date de commande"];
    const createSortHandler = (id) => null;
    return (
        <TableHead>
            <TableRow>
                {heads.map((name:string, id: number) => (
                <TableCell 
                    key={id}
                    align = {name=="Expédition" ? "center" : "left"}
                >
                    <TableSortLabel
                        active={orderBy === id}
                        direction={orderBy === id ? orderDir : 'asc'}
                        onClick={createSortHandler(id)}
                    >
                    {name}
                    </TableSortLabel>
                </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const OrderTable: React.FC<TableProps> = (props) => {
    const { orders } = props;
    const [orderBy, setOrderBy] = useState();
    const [orderDir, setOrderDir] = useState('asc');

    return (
        <div {...props}>
        <Table stickyHeader size="small">
            <OrderHead orderBy={orderBy} orderDir={orderDir}/>
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