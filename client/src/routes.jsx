import React from "react";
import { Switch, Route } from "react-router-dom";

import { ListWordGroupScreen } from "./screens/list-word-group";
import { MoveNameScreen } from "./screens/move-name";

export const Routes = () => (
  <Switch>
    <Route path="/move">
      <MoveNameScreen />
    </Route>
    <Route path="/">
      <ListWordGroupScreen />
    </Route>
  </Switch>
);
