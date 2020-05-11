

import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card'
import { OrderContext } from '../../context/order/order.context';

const OrderDetailsDialog = () =>  {
    const { order, setOpen, open } = useContext(OrderContext);
    const name = !!order && order.billing.first_name.charAt(0).toUpperCase() + order.billing.first_name.slice(1).toLowerCase();
    return (
      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogTitle>Détail commande</DialogTitle>
        <Card>
            Nice shot {name}
        </Card>
      </Dialog>
    );
  }

  export default OrderDetailsDialog;