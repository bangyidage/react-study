import { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/login" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
      </Fragment>
    )
  }
}