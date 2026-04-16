import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo projeto</Link>
      </div>
      <switch>
        <Container customClass="min-height">
          <route exact path="/">
            <Home />
          </route>
          <route exact path="/company">
            <Company />
          </route>
          <route exact path="/contact">
            <Contact />
          </route>
          <route exact path="/newproject">
            <NewProject />
          </route>
        </Container>
      </switch>
      <p>Footer</p>
    </Router>

  )
}

export default App;
