import React, { Component } from 'react'
import Instrument from '../listItems/Instrument'

class Instrument extends Component {
  state = {
    id: this.props.id || '',
    year: this.props.year || '',
    brand: this.props.brand || '',
    type: this.props.type || '',
    price: this.props.price || '',
    artistId: this.props.artistId || '',
    editMode: false
  }

  handleButtonClick = () => {
    const  { editMode } = this.state
    this.setState({
      editMode: !editMode
    })
  }

  handleInputChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  render() {
    const { editMode, id, year, brand, type, price, artistId } = this.state
    return (
      <Device 
        editMode={editMode}
        id={id}
        year={year}
        brand={brand}
       type={type}
        price={price}
        artistId={artistId}
        onButtonClick={this.handleButtonClick}
        onInputChange={this.handleInputChange}
      />
    )
  }
}

export default Instrument
