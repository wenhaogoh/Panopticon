import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import About from "./pages/About";
import Game from "./pages/Game";
import Landing from "./pages/Landing";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/game" component={Game} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
