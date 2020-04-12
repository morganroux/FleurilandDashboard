import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

type ProductItemProps = {
    key: number,
    product: any
}

const ProductItem: React.FC<ProductItemProps> = (props) => {
    return (
        <TableRow key={props.key}>
            <IdCell>{props.product.id}</IdCell>
            <NameCell>{props.product.billing.first_name} {props.product.billing.last_name} </NameCell>
            <PriceCell>{props.product.total}€</PriceCell>
            <StatusCell>{props.product.status}</StatusCell>
            <MethodCell>{props.product.shipping_lines[0].method_title}</MethodCell>
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
    return (
        <TableCell>{props.children}</TableCell>
    );
}

const MethodCell: React.FC = (props) => {
    return (
        <TableCell>{props.children}</TableCell>
    );
}

export default ProductItem;