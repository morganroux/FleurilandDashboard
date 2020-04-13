import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import OrderList from './OrderList';
import OrderItem from './OrderItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { useStylesOrders } from './Orders.style';

type OrdersProps = {
    orders:any
}

const OrdersFade: React.FC<OrdersProps> = (props) => {

    return (
        <div {...props} >
            <OrderList>
                {props.orders.map((order) => {
                    return (
                    <OrderItem 
                        key = {order.id}
                        order={order}
                    />)}
                )}
            </OrderList>
        </div>
    )
}

const Orders: React.FC = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStylesOrders();

    useEffect(() => {
        async function loadOrders() {
            const newOrders = await axios.get("http://localhost:3000/api/orders");
            setOrders(newOrders.data);
            setIsLoading(false);
        }
        loadOrders();
    }, []);

    return (
        <div className = {classes.root}>
            <Typography variant="h4" noWrap>Commandes</Typography>
            {isLoading == true && <CircularProgress />}
            <Fade in={!isLoading} timeout={500}>
                <OrdersFade orders={orders}/>
            </Fade>
        </div>
    )
}
export default Orders;