
import React, { useContext, useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Card, Box, Container, Paper, Fade } from '@material-ui/core';
import { TableContainer, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { OrderContext, OrderContextProps } from '../../context/order/order.context';
import { LineItem, Billing } from '../../types/woocommerce.d';
import { useStylesDetailsDialog } from './OrderDetailsDialog.style';

const formatStr = (str: String) : String => {
  return !!str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';
}

const OrderDetailsDialog: React.FC = () =>  {
    const { order, setOpen, open } = useContext<OrderContextProps>(OrderContext);
    const bill: {first_name, last_name, address_1, address_2, postcode, city, email, phone} = !!order && order.billing;
    const ship: {first_name, last_name, address_1, address_2, postcode, city} = !!order && order.shipping; 
    const productList: Array<LineItem> = !!order ? order.line_items : [];
    const method: string = !!order && order.shipping_lines[0] ? order.shipping_lines[0].method_title : 'Aucune méthode renseignée';
    const classes = useStylesDetailsDialog();

    return (
      <Dialog 
        open={open}
        onClose={() => setOpen(false)}
        fullWidth= {true}
        maxWidth= 'md' 
      >
        {/* <DialogTitle>Détail commande</DialogTitle> */}
        <DialogContent className={classes.dialogContent}>
            <Container className={classes.container}>
              {order && 
                <div>
                  <Typography variant="h4" className={classes.mainTitle}>Commande #{order.id} </Typography>
                  <Card elevation={3} className={classes.main}>
                    <Typography variant="h4" className={classes.title}>{formatStr(bill.first_name)} {formatStr(bill.last_name)}</Typography>
                    <Typography variant="body1">Méthode : {method}</Typography>
                    <Typography variant="body1">Paiement : {order.payment_method_title}</Typography>
                    <Typography variant="body1">Total : {order.total}€</Typography>
                  </Card>
                  <Card elevation={3} className={classes.contact}>
                    <div className= {classes.address}>
                      <Typography variant="h4" className={classes.title}>Facturation</Typography>
                      <Typography variant="body1" style={{fontWeight:'bold'}}>{formatStr(bill.first_name)} {formatStr(bill.last_name)}</Typography>
                      <Typography variant="body1">
                        {`${bill.address_1.toLowerCase()}${!!bill.address_2 ? ` ${bill.address_2.toLowerCase()} ` : ' '}- ${bill.postcode} ${formatStr(bill.city)}`}
                      </Typography>
                      {bill.email && <Typography variant="body1">{bill.email.toLowerCase()}</Typography>}
                      {bill.phone && <Typography variant="body1">{bill.phone}</Typography>}
                    </div>
                    {method == "Livraison chez vous" && (
                    <div className= {classes.address}>
                      <Typography variant="h4" className={classes.title}>Livraison</Typography>
                      <Typography variant="body1" style={{fontWeight:'bold'}}>{formatStr(ship.first_name)} {formatStr(ship.last_name)}</Typography>
                      <Typography variant="body1">
                        {`${ship.address_1.toLowerCase()}${!!ship.address_2 ? ` ${ship.address_2.toLowerCase()} ` : ' '}- ${ship.postcode} ${formatStr(ship.city)}`}
                      </Typography>
                    </div>
                    )}
                  </Card>
                  <Card elevation={3} className={classes.details}>
                    <Typography variant="h4" className={classes.title}>Détails de la commande</Typography>
                    <Paper 
                      className={classes.tableContainer}>
                    <Table>
                      <TableBody>
                        {productList.map((product, id) => {
                          return (
                            <TableRow key={id}>
                              <TableCell>{product.quantity}</TableCell>
                              <TableCell>{product.name}</TableCell>

                            </TableRow>
                          )})}
                      </TableBody>
                    </Table>        
                    </Paper>
                  </Card>
                </div>
              }
            </Container>
          </DialogContent>
      </Dialog>
    );
  }

  export default OrderDetailsDialog;