import React, { Component } from 'react'


import AddArtist from '../forms/AddArtist'
const uuidv4 = require('uuid/v4')

class AddArtistContainer extends Component {
  state = {
    id: uuidv4(),
    firstName: '',
    lastName: ''
  }

  handleInputChange = (key, value) => {
    this.setState({ [key]: value })
  }

  render() {
    const { id, firstName, lastName } = this.state
    return (
      <AddArtist
        id={id}
        firstName={firstName}
        lastName={lastName}
        onInputChange={this.handleInputChange}
      />
    )
  }
}

export default AddArtistContainer