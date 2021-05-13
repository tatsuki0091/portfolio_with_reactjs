import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Top from "./features/top/Top";
import Playground from "./features/playground/Playground";
import PlaygroundTwo from "./features/playground/PlaygroundTwo";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/playground" component={Playground} />
          <Route path="/playgroundTwo" component={PlaygroundTwo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
