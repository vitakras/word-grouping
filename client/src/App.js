import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "./components/header";
import { Notification } from "./components/notification";
import { Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Header />
            <Routes />
          </Router>
          <Notification />
        </React.Suspense>
      </RecoilRoot>
    </div>
  );
}

export default App;
