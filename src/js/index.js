import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import App from './containers/app.container'
import Home from './containers/home.container'
import SignUp from './containers/signUp.container'
import SignIn from './containers/signIn.container'
import Post from './containers/post.container'
import CreatePost from './components/createPost.component'
import TagPage from './containers/tag.container'
import { configure } from 'redux-auth'


const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store)
store.dispatch(configure(
  {apiUrl:"http://localhost:3000"}
)).then(() => {

  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
            <Route path="signUp" component={SignUp}/>
            <Route path="signIn" component={SignIn}/>
            <Route path="post" component={Post}/>
            <Route path="post/partTwo" component={CreatePost}/>
            <Route path="tagPage" component={TagPage}/>
          </Route>
        </Router>
      </div>
    </Provider>,
    document.getElementById('root')
  )
});

