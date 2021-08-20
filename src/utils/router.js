import { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Router, Redirect } from 'react-router-dom';
import App from '../App';
class MyRouter extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Route path="/" component={App}></Route>
        </BrowserRouter>
      </Fragment>
    )
  }
}
export default MyRouter