import React, {useContext, useEffect, useState} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import StatusSelector from './StatusSelector';
import { useStylesStatusSelector, colors } from './Orders.style';
import axios from 'axios';

type OrderItemProps = {
    order: any
}

const OrderItem: React.FC<OrderItemProps> = (props) => {
    return (
            props.order && (
            <TableRow key={props.order.id}>
            <IdCell>{props.order.id}</IdCell>
            <NameCell>{props.order.billing.first_name} {props.order.billing.last_name} </NameCell>
            <PriceCell>{props.order.total}€</PriceCell>

            <StatusCell>{props.order.status}</StatusCell>
            {props.order.shipping_lines[0] && 
            <MethodCell>{props.order.shipping_lines[0].method_title}</MethodCell>}
            </TableRow>
            )
    );
}

const IdCell: React.FC = (props) => {
    return (
        <TableCell>{props.children}</TableCell>
    );
}

const NameCell: React.FC = (props) => {
    return (
        <TableCell>{props.children}</TableCell>
    );
}

const PriceCell: React.FC = (props) => {
    return (
        <TableCell>{props.children}</TableCell>
    );
}

const StatusCell: React.FC = (props) => {
    const [status, setStatus] = useState(props.children.toString());

    const handleChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
        const id = "12156";
        const status = event.target.value;
        const rep = await axios.put(`http://localhost:3000/api/updateOrder?id=${id}&status=${status}`);
        if (rep.data.status == event.target.value)
            setStatus(event.target.value as string);
      };
 
    return (
        <TableCell style={{ borderRadius:10 }}>
            <StatusSelector status={status} handleChange={handleChange}/>
        </TableCell>
    );
}

const MethodCell: React.FC = (props) => {
    return (
        <TableCell>{props.children}</TableCell>
    );
}

export default OrderItem;