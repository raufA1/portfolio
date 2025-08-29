import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  return (
    <div>
      <Main />
      <LanguageSwitcher />
    </div>
  );
}

export default App;

