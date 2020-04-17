import React from 'react'
import ListItemText from '@material-ui/core/ListItemText'

import DisplayCard from '../cards/DisplayCard'
import UpdateInstrument from '../forms/UpdateDevice'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'

import RemoveDevice from '../buttons/RemoveDevice'

const Instrument = (props) => {
  const { editMode, id, year, brand, type, price, artistId, onButtonClick, onInputChange } = props
  const fullName = `${year} ${brand} ${type}`

  const renderInstrument = () => (
      editMode ?
        <UpdateInstrument
          id={id}
          year={year}
          brand={brand}
          type={type}
          price={price}
          artistId={artistId}
          onButtonClick={onButtonClick}
          onInputChange={onInputChange}
        />
        :
        <ListItem>
          <ListItemText
            primary={fullName}/>}
          />
          <Button
            onClick={onButtonClick}
            variant='contained'
            style={{ margin: '8px' }}
          >
            Edit
          </Button>
          <RemoveDevice
            id={id}
            year={year}
            brand={brand}
           type={model}
            price={type}
           artistId={artistId}
          />
        </ListItem>
  )
  return (
    <DisplayCard>
      {renderInstrument()}
    </DisplayCard>
  )
}
export default Instrument