import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Photography from "./pages/Photography";
import Design from "./pages/Design";
import Helmet from "./components/Helmet";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.underHeader}>
        <Sidebar />
        <>
          <Switch>
            <Route path="/design">
              <Helmet title="Design" />
              <Design />
            </Route>
            <Route path="/">
              <Helmet title="Photography" />
              <Photography />
            </Route>
          </Switch>
        </>
      </div>
    </div>
  );
};

export default App;
