import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { v4 as uuidv4 } from 'uuid'

import { ADD_CONTACT, GET_CONTACTS, ADD_ARTIST, GET_ARTISTS } from '../../queries/index'

const AddArtist = ({ id, firstName, lastName, onInputChange }) => {
  const [AddArtist] = useMutation(
    ADD_ARTIST,
    {
      update(cache, { data: { addArtist } 
      }) 
      {
        const { artists } = cache.readQuery({ query: GET_ARTISTS })
        cache.writeQuery({
          query: GET_ARTISTS,
          data: { artists: artists.concat([addArtist])}
        })
      }
    }
  )
  return (
    <form onSubmit={e => {
      e.preventDefault()
      addArtist({
        variables: {
          id, firstName, lastName
        },
        optimisticResponse: {
          __typename: 'Mutation',
          addArtist: {
            __typename: 'Artist',
            id,
            firstName,
            lastName
          }
        }
      })
    }}>
      <TextField
        label='First Name'
        placeholder='i.e. John'
        margin='normal'
        variant='outlined'
        style={{ margin: '10px' }}
      />
      <TextField
        label='Last Name'
        placeholder='i.e. Smith'
        margin='normal'
        variant='outlined'
        style={{ margin: '10px' }}
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ marginTop: '20px', alignItems: 'center', marginLeft: '10px' }}
      >
        Add Contact
      </Button>
    </form>
  )
}

export default AddArtist
