import React, { Component } from 'react'
import axios from 'axios';

class UrlBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: "https://www.amazon.com"};

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
        document.getElementById("simple-page").innerHTML = response.data
      })
      .catch(error => alert(error))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange} />
        </label>
        <div id="simple-page" />
      </form>
    );
  }
}

export default UrlBar
