import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { v4 as uuidv4 } from 'uuid'

import { ADD_INSTRUMENT, GET_INSTRUMENTS, GET_ARTISTS } from '../../queries/index'


const ADD_INSTRUMENT = ({ id, year, brand, model, price, characterId, onInputChange }) => {
  const [addInstrument] = useMutation(
    ADD_INSTRUMENT,
    {
      update(cache, { data: { addInstrument } }) {
        const { instruments } = cache.readQuery({ query: GET_INSTRUMENTS })
        cache.writeQuery({
          query: GET_INSTRUMENTS,
          data: { instruments:instruments.concat([addInstrument])}
        })
      }
    }
  )

  const { loading, error, data } = useQuery(GET_INSTRUMENTS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <form onSubmit={e => {
      e.preventDefault()
      addInstrument({
        variables: {
          id, year, brand, type, price, artistId
        },
        optimisticResponse: {
          __typename: 'Mutation',
          addDevice: {
            __typename: 'Artist',
            id, 
            year, 
            brand, 
            type, 
            price, 
           artistId
          }
        }
      })
    }}>
     <TextField
        style={{ display: 'flex', margin: '10px' }}
      />
        <TextField
        style={{ display: 'flex', margin: '10px' }}
      />
         <TextField
        style={{ display: 'flex', margin: '10px' }}
      />
         <TextField
        style={{ display: 'flex', margin: '10px' }}
      />
      <Select
        native
        defaultValue='1'
        value={artistId}
        onChange={e => onInputChange('artistId', e.target.value)}
        input={
          <OutlinedInput name='artist' id="outlined-age-native-simple" />
        }
        style={{ display: 'flex', margin: '10px' }}
      >
        {data.artists.map(({ id, firstName, lastName }) => (
          <option value={id}>{firstName} {lastName}</option>
        ))}
      </Select>
      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ marginTop: '20px', alignItems: 'center', marginLeft: '10px' }}
      >
        Add instruments
      </Button>
    </form>
  )
}

export default AddDevice