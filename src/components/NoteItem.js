import React, { useRef } from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, Modal, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { DELETE_NOTE, UPDATE_NOTE } from '../redux/actions';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  root: {
    margin: 20,
  },
  titleField: {
    width: '100%',
    marginBottom: '20px'
  },
  cancelBtn: {
    marginRight: '10px'
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

const NoteItem = (props) => {
  const classes = useStyles();
  const { title, id, data } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [updatedTitle, setUpdatedTitle] = React.useState(title);
  const [updatedData, setUpdatedData] = React.useState(data);

  const handleDeleteClick = () => {
    dispatch({
      type: DELETE_NOTE,
      payload: {
        id
      }
    })
  }

  const handleTextChange = (e) => {
    if(e.target.id === 'title') {
      setUpdatedTitle(e.target.value);
    } else if(e.target.id === 'data') {
      setUpdatedData(e.target.value);
    } 
  }

  const updateNotesItem = () => {
    if(updatedTitle && updatedData) {
      dispatch({
        type: UPDATE_NOTE,
        payload: {
          id,
          updatedTitle,
          updatedData
        }
      });
      setOpen(false);
    }
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const showEditModal = () => {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField value={updatedTitle} id="title" className={classes.titleField} label="Title" variant="outlined" onChange={handleTextChange}/>
          <TextField value={updatedData} id="data" variant="outlined" className={classes.titleField} label="Enter Notes" multiline minRows={2} maxRows={4} onChange={handleTextChange} />
          <Button variant="contained" color="secondary" className={classes.cancelBtn} onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="primary" className={classes.btn} onClick={updateNotesItem}>Save</Button>
        </Box>
      </Modal>
    )
  }

  return (
    <Card sx={{ minWidth: 20 }} className={classes.root} >
      <CardContent>
        <Typography variant={'h4'} gutterBottom>
          {title}
        </Typography>
        <Typography variant={'subtitle1'} gutterBottom>
          {data}
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined" color="primary" onClick={handleOpen}>Edit</Button>
          <Button size="small" variant="outlined" color="secondary" onClick={handleDeleteClick}>Delete</Button>
        </CardActions>
        {showEditModal()}
    </Card>
  )
}

export default NoteItem;