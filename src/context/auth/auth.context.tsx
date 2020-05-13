import React, { useReducer } from 'react';
import { firebase } from '../../helper/firebase';

export interface AuthState {
  auth: boolean
  user?: firebase.User
}

export interface AuthContextProps {
  authState?: AuthState
  authDispatch?: React.Dispatch<any>
}

const INITIAL_STATE = {
  auth: false,
  user: null
};

export const AuthContext = React.createContext<AuthContextProps>({});

const authReducer = (state: AuthState, action: any): AuthState => {

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
          user: null
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