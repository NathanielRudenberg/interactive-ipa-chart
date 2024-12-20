import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import routes from './routes';
import AppBar from './components/AppBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.history = createBrowserHistory();
  }

  render() {
    return (
      <>
        <Router history={this.history}>
          <section className='app-wrapper'>
            <AppBar />
            <main className='app-main'>
              <Switch>
                {routes.map(route => (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    render={props => (
                      // <div className='app-main-container'>
                        <route.component {...props} />
                      // </div>
                    )}
                  />
                ))}
              </Switch>
            </main>
          </section>
        </Router>
      </>
    );
  }
}

export default App;
