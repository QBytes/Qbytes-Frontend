import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import App from './containers/app.container'
import Home from './containers/home.container'
import Post from './containers/post.container'

const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="home" component={Home}/>
					<Route path="post" component={Post}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
