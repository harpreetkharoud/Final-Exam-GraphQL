import React from 'react'

import Button from '@material-ui/core/Button'
import { useMutation } from '@apollo/react-hooks'
import filter from 'lodash/filter'

import { GET_ARTISTS, REMOVE_ARTIST } from '../../queries/index'

const RemoveArtist = ({ id, firstName, lastName}) => {
  const [RemoveArtist] = useMutation(
    REMOVE_ARTIST,
    {
      update(cache, { data: { RemoveArtist } }) {
        const { artists } = cache.readQuery({
          query: GET_ARTISTS
        })
        cache.writeQuery({
          query: GET_ARTISTS,
          data: { artists: filter(artists, c => { return c.id !== RemoveArtist.id })}
        })
      }
    }
  )
  const
  return (
    <Button onClick={e=>{
     e.preventDefault()
     RemoveArtist(
       {
         variables: {
           id
         },
         optimisticResponse: {
          __typename: 'Mutation',
          RemoveArtist: {
            __typename: 'Artist',
            id,
            firstName,
            lastName
          }
        }
      }) 
    }} variant='contained' color='secondary' style={{ margin: '10px' }}>
      Delete
    </Button>
  )
}

export default RemoveArtist
