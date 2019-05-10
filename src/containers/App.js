import React from 'react';
import { connect } from 'react-redux'

import { consoleLog } from './../redux/actions'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    const { dispatch, init } = this.props
    dispatch(consoleLog())

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { init } = state
  return {
    init
    }
}
export default connect(mapStateToProps)(App);
