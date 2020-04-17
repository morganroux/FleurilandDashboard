import React, { useReducer } from 'react';

interface AuthContextProps {
  auth: any
}

const INITIAL_STATE = {
  auth: false
};

export const AuthContext = React.createContext<Partial<any>>({});

const authReducer = (state: any, action: any) => {

  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        auth: true
      };
    case 'LOGOUT':
        return {
          ...state,
          auth: false
        };
    default:
      return state;
  }
}
  
export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};