import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/header";
import { Notification } from "./components/notification";
import { ListWordGroupScreen } from "./screens/list-word-group";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Header />
            <Switch>
              <Route path="/" >
                <ListWordGroupScreen />
              </Route>
            </Switch>
          </Router>
          <Notification />
        </React.Suspense>
      </RecoilRoot>
    </div>
  );
}

export default App;
