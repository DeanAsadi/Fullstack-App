import React, { Component } from "react";
import { Provider } from "react-redux";
import { Link } from "react-router-dom";

import "./App.css";
import routes from "./routes";
import store from "../src/redux/ducks/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header" />
          <Link to="/new">
            <button>New Prudect</button>
          </Link>
          <br />
          <br />
          <br />
          <Link to="/products">All products</Link>
          {routes}
        </div>
      </Provider>
    );
  }
}

export default App;
