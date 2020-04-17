import React, { Fragment } from 'react'

import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'

import RemoveArtist from '../buttons/RemoveArtist'
import DisplayCard from '../cards/DisplayCard'

const useStyles = makeStyles({
  label: {
    textDecoration: 'none'
  }
})

const Artist = (props) => {
  const { editMode, id, firstName, lastName, onButtonClick, onInputChange } = props
  const fullName = `${firstName} ${lastName}`

  const classes = useStyles()
  return (
    <DisplayCard>
    <Fragment>
      {
        editMode ?
          <UpdateArtist
            id={id}
            firstName={firstName}
            lastName={lastName}
            editMode={editMode}
            onButtonClick={onButtonClick}
            onInputChange={onInputChange}
          />
          :
          <ListItem>
            <ListItemText
              primary={fullName}
            />
            <Button
              onClick={onButtonClick}
              variant='contained'
              style={{ margin: '5px' }}
            >
              Edit
            </Button>
            <RemoveArtist
              id={id}
              firstName={firstName}
              lastName={lastName}
            />
          </ListItem>          
      }
      <Devices artistId={id} />
      <CardActions>
        <Button size='small' color='primary' variant='outlined'>
          <Link to={{
            pathname: `/artists/${id}`
          }}
          >
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Fragment>
  </DisplayCard>
)
}

export default Artist
