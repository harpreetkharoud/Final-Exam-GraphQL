import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { v4 as uuidv4 } from 'uuid'

import { UPDATE_INSTRUMENT , GET_ARTISTS } from '../../queries/index'


const UpdateIstrument = (props) => {
    const { id, year, brand, type, price, artistId, onButtonClick, onInputChange } = props
    const [updateInstrument] = useMutation(UPDATE_INSTRUMENT)
  
    const { loading, error, data } = useQuery(GET_ARTISTS)
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          updateDevice({
            variables: {
              id, year, brand, type, price,artistId
            }
          })
          onButtonClick()
        }}
      >
        <TextField
          label='Year'
          defaultValue={year}
          onChange={e => onInputChange('year', e.target.value)}
          type='number'
          margin='normal'
          variant='outlined'
          style={{ display: 'flex', margin: '12px' }}
        />
        <TextField
          label='brand'
          defaultValue={brand}
          onChange={e => onInputChange('brand', e.target.value)}
          margin='normal'
          variant='outlined'
          style={{ display: 'flex', margin: '12px' }}
        />
        <TextField
          label='Type'
          defaultValue={model}
          onChange={e => onInputChange('type', e.target.value)}
          margin='normal'
          variant='outlined'
          style={{ display: 'flex', margin: '12px' }}
        />
        <TextField
          label='Price'
          defaultValue={price}
          onChange={e => onInputChange('price', e.target.value)}
          type='number'
          margin='normal'
          variant='outlined'
          style={{ display: 'flex', margin: '12px' }}
        />
        <Select
          native
          defaultValue='1'
          value={artistId}
          onChange={e => onInputChange('artistId', e.target.value)}
          input={
            <OutlinedInput name='artist' id="outlined-age-native-simple" />
          }
          style={{ display: 'flex', margin: '12px' }}
        >
          {data.artists.map(({ id, firstName, lastName }) => (
            <option value={id}>{firstName} {lastName}</option>
          ))}
        </Select>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          style={{ margin: '12px' }}
        >
          Update Instruments
        </Button>
        <Button
          onClick={onButtonClick}
          variant='contained'
          color='secondary'
          style={{ margin: '12px' }}
        >
          Cancel
        </Button>
      </form>
    )
  }
  
  export default updateInstrument