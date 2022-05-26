//https://github.com/vipinkrishna

import React, { Component } from 'react'
import { render } from 'react-dom'
import Tree from './components/Tree';
import './index.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tree: {
        name: "root",
        data: [
          {name: "one", data: [{name: "two", data: [{name: "three", data: [{name: "four", data: null}]}]}]},
          {name: "one", data: [{name: "two", data: [{name: "three", data: [{name: "four", data: null}]}]}]},
          {name: "one", data: [{name: "two", data: [{name: "three", data: [{name: "four", data: null}]}]}]}
        ]
      }
    }
  }

  render() {
    return (
      <>
        <Tree name={this.state.tree.name} data={this.state.tree.data} level={0} />
      </>
    )
  }
}

render(<App />, document.getElementById('root'))
