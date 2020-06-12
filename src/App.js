import React from "react";
import { Provider } from "react-redux";
import store from "./redux-setup/store";
import Clock from "./components/Clock";
import Control from "./components/Control";
import TimeManager from "./components/TimeManager";

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="container">
          <TimeManager />
          <Clock />
        </div>
        <Control />
      </div>
    </Provider>
  );
}

export default App;
