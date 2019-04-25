import React, { Component } from 'react';
import './App.css';
import UrlBar from './UrlBar';
import Loadable from 'react-loadable';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modules: []};
  }

  loadModule (name) {
    const newModule = Loadable({
      loader: () => import('./'+name),
      loading: () => <div>Loading {name}...</div>,
    })
    const modules = [].concat(this.state.modules, [newModule])

    this.setState({
      modules: modules})
  }

  renderModules (modules) {
    return modules.map((Module, i) => {
      return <Module key={i} />
    })
  }

  render () {
    return (
      <div className="app">
  
        <UrlBar />
  
        <div className="dynamic-modules">
          {this.renderModules(this.state.modules)}
        </div>

      </div>);
  }
}

export default App;
