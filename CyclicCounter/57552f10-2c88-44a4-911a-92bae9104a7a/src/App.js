import React, { Component } from 'react';
import './App.css';

import CycleCounter from './components/CycleCounter';

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { cycle } = this.props;
    console.log('cycle in app.js', cycle)
    return (
      <div className="App">
        <CycleCounter cycle={cycle} />
      </div>
    );
  }
}

export default App;
