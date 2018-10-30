import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../Header/index'
import Home from '../Home/index'
import Uber from '../Uber/index'
import Lyft from '../Lyft/index'
import Login from '../Login/index'

class Core extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header></Header>
            <Route exact path='/' component={Home} />
            <Route exact path='/uber' component={Uber} />
            <Route exact path='/lyft' component={Lyft} />
            <Route exact path='/login' component={Login} />
          </div>
        </Router>
      </div>
    )
  }
}

export default Core
