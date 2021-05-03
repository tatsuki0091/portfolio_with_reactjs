import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Top from "./features/top/Top";
import Playground from "./features/playground/Playground";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/" component={Playground} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
