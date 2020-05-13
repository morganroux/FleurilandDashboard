
import React, { useContext, useEffect, useState } from 'react';
import { Dialog, DialogTitle, Card, Box, Container, Paper, Fade } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { OrderContext, OrderContextProps } from '../../context/order/order.context';
import { LineItem, Billing } from '../../types/woocommerce.d';

const formatStr = (str: String) : String => {
  return !!str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';
}

const OrderDetailsDialog: React.FC = () =>  {
    const { order, setOpen, open } = useContext<OrderContextProps>(OrderContext);

    const {first_name, last_name, address_1, address_2, postcode, city, email, phone}: Billing = !!order && order.billing; 
    const productList: Array<LineItem> = !!order ? order.line_items : [];
    const method: string = !!order && order.shipping_lines[0] ? order.shipping_lines[0].method_title : 'Aucune méthode renseignée';

    return (
      <Dialog 
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>Détail commande</DialogTitle>
        <Box>
            <Container>
              {order && 
                <div>
                  <Typography variant="h3">{formatStr(first_name)} {formatStr(last_name)}</Typography>
                  <Typography variant="body1">Méthode : {method}</Typography>
                  <Typography variant="body1">Paiement : {order.payment_method_title}</Typography>
                  <Typography variant="body1">Total : {order.total}€</Typography>
                  <Typography variant="h5">Contact</Typography>
                  <Typography variant="body1">{address_1}</Typography>
                  {!!address_2 && <Typography variant="body1">{address_2}</Typography>}
                  <Typography variant="body1">{postcode}</Typography>
                  <Typography variant="body1">{city}</Typography>
                  <Typography variant="body1">{email}</Typography>
                  <Typography variant="body1">{phone}</Typography>

                  <Typography variant="h5">Details de la commande</Typography>
                  {productList.map((product, id) => {
                    return (
                    <Typography variant="body1" key={id}>- {product.quantity}x {product.name}</Typography>
                    )
                  })}
                </div>
              }

            </Container>
          </Box>
        
      </Dialog>
    );
  }

  export default OrderDetailsDialog;