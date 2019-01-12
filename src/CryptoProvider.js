import React, { Component } from "react";

export const CryptoContext = React.createContext();

export default class CryptoProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "dashboard",
      ...this.savedSettings(),
      setPage: this.setPage,
      addToFavorites: this.addToFavorites
    };
  }
  /**
   * first  is true for the very first entry
   * first is false is the user has already visited
   */
  addToFavorites = () => {
    this.setState({ first: false, page: "dashboard" });
    localStorage.setItem(
      "cryptos",
      JSON.stringify({
        test: "test"
      })
    );
  };

  savedSettings = () => {
    let instillCryptoData = JSON.parse(localStorage.getItem("cryptos"));
    if(instillCryptoData) {
        return { page: 'settings',first: true}
    }
    return {}
};

  setPage = page => this.setState({ page: page });
  render() {
    return (
      <CryptoContext.Provider value={this.state}>
        {this.props.children}
      </CryptoContext.Provider>
    );
  }
}
