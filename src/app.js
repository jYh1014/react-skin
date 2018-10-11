import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import Color from './Color.js'
import { hot } from 'react-hot-loader'
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>

        
        <Color />
      </div>
    )
  }
}
export default hot(module)(App)