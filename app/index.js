import './styles/app.css';
import React from 'react'
import { render } from 'react-dom'
import Core from './components/Core/index'

//root component
class App extends React.Component {

  render() {
    return (
      <div>
        <Core />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
