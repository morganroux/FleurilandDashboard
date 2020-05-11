import React, { useState } from 'react';

interface AuthContextProps {
  auth: any
  user: any
}



export const OrderContext = React.createContext<Partial<any>>({});

export const OrderProvider: React.FunctionComponent = ({ children }) => {
  const [order, setOrder] = useState();
  const [open, setOpen] = useState(false)
  return (
    <OrderContext.Provider value={{ order, setOrder, open, setOpen }}>
      {children}
    </OrderContext.Provider>
  );
};