import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import OrderItem from './OrderItem';
import { sortById, sortByName, sortByTotal, sortByStatus, sortByDate, sortByMethod } from './sorters';
import { TableSortLabel } from '@material-ui/core';

interface TableProps {
    orders:any
}

interface HeadProps {
    orderBy: number
    orderDir: "desc" | "asc"
    setOrderBy
    setOrderDir
}

const OrderHead: React.FC<HeadProps> = ({orderBy, orderDir, setOrderBy, setOrderDir}) => {
    const heads:string[]= ["N°", "Nom", "Total", "Status", "Date de commande", "Expédition"];
    const createSortHandler = (id) => {
        console.log(id);
        if (orderBy == id)
            setOrderDir(orderDir == 'asc' ? 'desc' : 'asc');
        else {
            setOrderBy(id);
            setOrderDir('asc');
        }
    };
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
                        onClick={() => createSortHandler(id)}
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
    const [orderBy, setOrderBy] = useState(0);
    const [orderDir, setOrderDir] = useState<"desc" | "asc">('asc');
    const sorters = [sortById, sortByName, sortByTotal, sortByStatus, sortByDate, sortByMethod];
    const getSortHandler = (orderBy, orderDir) => { return (
        (elmt1: any, elmt2: any) =>  {

            const ret = sorters[orderBy](elmt1,elmt2); //elmt1.id <= elmt2.id ? -1 : 1;
            return (orderDir == 'asc' ? ret : -ret);
        }
    )}
    return (
        <div {...props}>
        <Table stickyHeader size="small">
            <OrderHead orderBy={orderBy} orderDir={orderDir} setOrderBy={setOrderBy} setOrderDir={setOrderDir}/>
            <TableBody>
                {orders.sort(getSortHandler(orderBy, orderDir)).map((order) => {
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