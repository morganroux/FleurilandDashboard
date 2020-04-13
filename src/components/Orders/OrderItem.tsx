import React, {useContext, useEffect, useState} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import StatusSelector from './StatusSelector';
import { useStylesStatusSelector, colors } from './Orders.style';

type OrderItemProps = {
    order: any
}

const OrderItem: React.FC<OrderItemProps> = (props) => {
    return (
        <TableRow key={props.order.id}>
            <IdCell>{props.order.id}</IdCell>
            <NameCell>{props.order.billing.first_name} {props.order.billing.last_name} </NameCell>
            <PriceCell>{props.order.total}€</PriceCell>
            <StatusCell>{props.order.status}</StatusCell>
            <MethodCell>{props.order.shipping_lines[0].method_title}</MethodCell>
        </TableRow>
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

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        console.log("here");
        setStatus(event.target.value as string);
        //setColor(colors[event.target.value as string]);
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