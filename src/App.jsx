import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes as Switch } from "react-router";
import HomepageWrapper from "./pages/HomepageWrapper/HomepageWrapper";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact element={<HomepageWrapper />}>
          <Route index element={<Home />} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
