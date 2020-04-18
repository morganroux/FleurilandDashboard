import React, { useReducer } from 'react';

interface AuthContextProps {
  auth: any
  user: any
}

const INITIAL_STATE = {
  auth: false,
  user:''
};

export const AuthContext = React.createContext<Partial<any>>({});

const authReducer = (state: any, action: any) => {

  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        auth: true,
        user: action.user
      };
    case 'LOGOUT':
        return {
          ...state,
          auth: false,
          user: ''
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