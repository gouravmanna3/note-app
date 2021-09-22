import React from 'react';
import { Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { DELETE_NOTE } from '../redux/actions';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  root: {
    margin: 20,
  }
}));

const NoteItem = (props) => {
  const classes = useStyles();
  const { title, id, data } = props;
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch({
      type: DELETE_NOTE,
      payload: {
        id
      }
    })
  }

  return (
    <Card sx={{ minWidth: 20 }} className={classes.root} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data}
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined" color="primary">Edit</Button>
          <Button size="small" variant="outlined" color="error" onClick={handleDeleteClick}>Delete</Button>
        </CardActions>
    </Card>
  )
}

export default NoteItem;