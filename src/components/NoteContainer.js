import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import NoteItem from './NoteItem';
import { nanoid } from 'nanoid';

const useStyles = makeStyles(() => createStyles({
  container: {
    margin: 20,
    padding: 20,
  }
}));

const NoteContainer = () => {
  const { notes } = useSelector((state) => {
    return {
      notes: state.notes
    }
  });

  const classes = useStyles();

  return (
    <Box className={classes.container}>

      { !notes.length && 
        <Typography variant={'h4'} gutterBottom align='center'>
          Please Add Notes
        </Typography>
      }
      { 
        notes?.map((note) => {
        return <NoteItem {...note} key={nanoid()} />
        })
      }
    </Box>
  )
}

export default NoteContainer;