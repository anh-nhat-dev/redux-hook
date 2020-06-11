import React from "react";
import { Provider } from "react-redux";
import store from "./redux-setup/store";
import Number from "./components/Number";
import Button from "./components/Button";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Number />
        <Button />
      </div>
    </Provider>
  );
}

export default App;
