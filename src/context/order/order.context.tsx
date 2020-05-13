import React, { useState } from 'react';
import { Order } from '../../types/woocommerce.d';

export interface OrderContextProps {
  order: Order
  setOrder?: React.Dispatch<React.SetStateAction<Order>>
  open: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}


export const OrderContext = React.createContext<OrderContextProps>({order: null, open: false});

export const OrderProvider: React.FunctionComponent = ({ children }) => {
  const [order, setOrder] = useState<Order>();
  const [open, setOpen] = useState<boolean>(false)
  return (
    <OrderContext.Provider value={{ order, setOrder, open, setOpen }}>
      {children}
    </OrderContext.Provider>
  );
};