import React from 'react'

import Button from '@material-ui/core/Button'
import { useMutation } from '@apollo/react-hooks'
import filter from 'lodash/filter'

import { GET_INSTRUMENTS, REMOVE_INSTRUMENT } from '../../queries/index'

const RemoveInstrument =  ({ id, year, brand, model, price, characterId }) => {
    const [RemoveInstrument] = useMutation(
      REMOVE_INSTRUMENT,
      {
        update(cache, { data: { RemoveInstrument } }) {
          const { instruments } = cache.readQuery({
            query: GET_INSTRUMENTS
          })
          cache.writeQuery({
            query: GET_INSTRUMENTS,
            data: { instruments: filter(instruments, c => { return c.id !== RemoveInstrument.id })}
          })
        }
      }
    )
  
    return (
      <Button onClick={e => {
        e.preventDefault()
        RemoveInstrument({
          variables: {
            id
          },
          optimisticResponse: {
            __typename: 'Mutation',
            removeDevice: {
              __typename: 'Instrument',
              id, 
              year, 
              brand, 
              type, 
              price, 
              artistId
            }
          }
        })
      }}
        variant='contained'
        color='secondary'
        style={{ margin: '10px' }}
      >
        Delete
      </Button>
    )
  }
  
  export default RemoveInstrument