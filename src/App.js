import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Top from "./features/top/Top";
import Work from "./features/work/Work";
import Email from "./features/mail/Email";
import About from "./features/about/About";
import Playground from "./features/playground/Playground";
import PlaygroundTwo from "./features/playground/PlaygroundTwo";
import PlaygroundThree from "./features/playground/PlaygroundThree";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Email} />
          <Route path="/playground" component={Playground} />
          <Route path="/playgroundTwo" component={PlaygroundTwo} />
          <Route path="/playgroundThree" component={PlaygroundThree} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
