import React, { Component } from 'react'
import axios from 'axios';

class UrlBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: "http://news.ycombinator.com"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = this.state.value;
     axios.get("/urls/"+url)
      .then(response => {
          this.loadModule("ycombinator.com/HackerNewsIndex")
      })
      .catch(error => alert(error))
  }

  render() {
    return (
      <form id="url-bar" onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default UrlBar
