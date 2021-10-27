import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import About from "./pages/About";
import Game from "./pages/Game";
import Navbar from "./components/Navbar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Game} />
          <Route exact path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
