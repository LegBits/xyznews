import './App.css'
import Home from './Home'
import Search from './Search'
import Newslist from './News-list'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Pagination from './Pagination'
import Newsdetails from './News-details'

function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/search/:keywords">
                  <div className="App-query">
                    <div className="App-form">
                      <Search />
                    </div>
                    <div className="App-list">
                      <Pagination />
                      <Newslist />
                    </div>              
                  </div>
                </Route>
                <Route path="/article/:title/:description/:author">
                  <div className="App-query">
                    <div className="App-form">
                      <Search />
                    </div>
                    <div className="App-list">
                      <Newsdetails />
                    </div>             
                  </div>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
