import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { v4 as uuidv4 } from 'uuid'

import { UPDATE_ARTIST } from '../../queries/index'

const UpdateArtist = (props) => {
    const { id, firstName, lastName, onButtonClick, onInputChange } = props
    const [updateArtist] = useMutation(UPDATE_ARTIST)
  
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          updateArtist({
            variables: {
              id, firstName, lastName
            }
          })
          onButtonClick()
        }}
      >
        <TextField
          label='First Name'
          defaultValue={firstName}
          onChange={e => onInputChange('firstName', e.target.value)}
          margin='normal'
          variant='outlined'
          style={{ margin: '12px' }}
        />
        <TextField
          label='Last Name'
          defaultValue={lastName}
          onChange={e => onInputChange('lastName', e.target.value)}
          margin='normal'
          variant='outlined'
          style={{ margin: '12px' }}
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          style={{ margin: '12px' }}
        >
          Update Artist
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
  
  export default UpdateArtist