import React, { ChangeEvent, useState, useRef, RefObject } from 'react';
import { Box, Button, TextField, Modal, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { ADD_NOTE } from '../redux/actions';

const useStyle = makeStyles(() => createStyles({
  titleField: {
    width: '100%',
    marginBottom: '20px'
  },
  addButton: {
    height: 55,
    marginLeft: '10px'
  },
  boxStyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const NoteAdder = () => {

  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const titleFieldRef = useRef(null);
  const dataFieldRef = useRef(null);

  const addNotesItem = () => {
    const title = titleFieldRef.current.value;
    const data = dataFieldRef.current.value;
    if(title && data) {
      dispatch({
        type: ADD_NOTE,
        payload: {
          title,
          data
        }
      });
      setOpen(false);
    }
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useStyle();
  return (
    <Box>
      <Button variant="contained" color="primary" className={classes.addButton} onClick={handleOpen}>
        Add Note
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField id="note-title" className={classes.titleField}  label="Title" variant="outlined" inputRef={titleFieldRef}/>
          <TextField variant="outlined" className={classes.titleField} label="Enter Notes" multiline minRows={2} maxRows={4} inputRef={dataFieldRef} />
          <Button variant="contained" color="primary" onClick={addNotesItem}>Save</Button>
        </Box>
      </Modal>
    </Box>
  )
}

export default NoteAdder;