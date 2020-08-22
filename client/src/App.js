import React from "react";
import { RecoilRoot } from "recoil";
import { Header } from "./components/header";
import WordGroupList from "./components/word-group";
import { LoadWordGroupFolders } from "./components/load-word-group-folders";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
          <LoadWordGroupFolders />
          <Header />
          <WordGroupList />
        </React.Suspense>
      </RecoilRoot>
    </div>
  );
}

export default App;
