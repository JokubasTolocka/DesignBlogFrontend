import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Photography from "./pages/Photography";
import styles from "./App.module.scss";

const App = () => {
  const history = useHistory();

  useEffect(() => {
    if (window.location.pathname === "/") {
      history.push("/photography");
    }
  }, [history]);

  return (
    <div className={styles.root}>
      {/* <Header /> */}
      <div className={styles.underHeader}>
        <Sidebar />
        <>
          <Switch>
            <Route path="/design"></Route>
            <Route path="/photography">
              <Photography />
            </Route>
          </Switch>
        </>
      </div>
    </div>
  );
};

export default App;
