import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Divider, Grid, Typography, List, Card, CardContent, CardActions, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import { TodosState } from '../redux/initial-state';
import NoteItem from './NoteItem';
// import TodoAdder from './TodoAdder';
import { nanoid } from 'nanoid';

const useStyles = makeStyles(() => createStyles({
  root: {
    margin: 20,
    padding: 20,
    backgroundColor: "rgb(92.9%, 92.9%, 92.9%)"
  }
}));

const NoteContainer = () => {
  const classes = useStyles();
  const { notes } = useSelector((state) => {
    return {
      notes: state.notes
    }
  });



  return (
    <Box>
      { 
        notes?.map((note, key) => {
        return <NoteItem {...note} key={nanoid()} />
        })
      }
    </Box>
  )
}

export default NoteContainer;