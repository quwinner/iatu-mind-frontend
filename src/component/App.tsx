import "./App.scss";
import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

// Import components
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import Home from "./Home/Home";

// Component
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const App: FC<any> = () => {
  return (
    <>
      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </>
  );
};

export default App;
