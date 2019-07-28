import React, {Component} from 'react';
import { SportsStoreDataStore } from './data/DataStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ShopConnector } from './shop/ShopConnector';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
          Sport Store
      </header>
    </div>
  );
}

export default App;*/

export default class App extends Component {

  render() {
      return <Provider store={ SportsStoreDataStore }>
          <Router>
              <Switch>
                  <Route path="/shop" component={ ShopConnector } />
                  <Redirect to="/shop" />
              </Switch>
          </Router>
      </Provider>
  }
}
