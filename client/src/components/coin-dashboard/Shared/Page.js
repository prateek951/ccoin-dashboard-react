import React from 'react';
import {CryptoContext} from "../App/CryptoProvider";

export default function ({name, children}) {
  return <CryptoContext.Consumer>
    {({page}) => {
      if (page !== name) {
        return null;
      }
      return <div> {children} </div>;
    }}
  </CryptoContext.Consumer>;
}
