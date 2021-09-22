import React from 'react';
import { AppBar, Box, Container, Paper, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import NoteAdder  from './components/NoteAdder';
import NoteContainer  from './components/NoteContainer';

const useStyles = makeStyles((theme) => createStyles({
  appContainer: {
    padding: '0px 100px',
    marginTop: 100
  },
  wrapper: {
    textAlign: 'center',
    width: '100%'
  },
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  }
}))

function App() {
  const classes = useStyles();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            Note App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.appContainer} fixed>
        <Paper className={classes.wrapper} elevation={0}>
          <NoteAdder />
        </Paper>
        <NoteContainer />
      </Container>
    </Box>
  );
}

export default App;
