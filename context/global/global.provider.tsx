import React, { useReducer } from 'react';
import GlobalContext from './global.context';

const INITIAL_STATE = {};

function reducer(state: any, action: any) {
    console.log(state, 'globalContext');
  
    switch (action.type) {
      case 'SIGNIN':
        return {
          ...state,
          currentForm: 'signIn',
        };
      default:
        return state;
    }
  }
  
  export const GlobalProvider: React.FunctionComponent = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return (
      <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
      </GlobalContext.Provider>
    );
  };