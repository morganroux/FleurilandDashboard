
import React, { useContext, useEffect, useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card'
import { OrderContext } from '../../context/order/order.context';
const axios = require("axios");

const OrderDetailsDialog = () =>  {
    const { order, setOpen, open } = useContext(OrderContext);
    const [isLoading, setIsLoading] = useState(true); 
    const name = !!order && order.billing.first_name.charAt(0).toUpperCase() + order.billing.first_name.slice(1).toLowerCase();
    const loadDetails = async () => {
        const orderDetails = await axios.get(`api/orders/${order.id}`);
        setIsLoading(false);
        console.log(orderDetails)
    }

    return (
      <Dialog onClose={() => setOpen(false)} open={open} onEnter={loadDetails}>
        <DialogTitle>Détail commande</DialogTitle>
        <Card>
            Nice shot {name}
        </Card>
      </Dialog>
    );
  }

  export default OrderDetailsDialog;