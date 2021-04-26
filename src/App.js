import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Top from "./features/top/Top";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Top} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
