import React, { Component } from 'react'

class Search extends Component {
  state = {
    text: ''
  }

  onChange = e => this.setState({ text: e.target.value })


  render() {
    return (
      <div>
        <form className="form">
          <input type="text" name="text" placeholder="Search User..." value={this.state.text} onChange={this.onChange}></input>
          <input type="submit" value="search" className="btn btn-dark btn-block" />
        </form>
      </div>
    )
  }
}

export default Search
