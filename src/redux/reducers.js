import { nanoid } from 'nanoid';
import { ADD_NOTE, DELETE_NOTE } from './actions';
import { initialState } from './initial-state';

function saveNotesToBrowser(state) {
  window.localStorage.setItem('notes', JSON.stringify(state));
}

function reducer(state = initialState, action) {
  switch(action.type) {

    case ADD_NOTE: {
      const { title, notes } = action.payload;
      console.log(action.payload)
      const newNotes = [
        ...state.notes,
        {
          id: nanoid(),
          title,
          data: notes
        }
      ];
      saveNotesToBrowser({notes: newNotes});
      return {
        ...state,
        notes: newNotes
      }
      
    }

    case DELETE_NOTE: {
      const { id } = action.payload;
      const newNotes = state.notes.filter(note => note.id!==id);
      saveNotesToBrowser({notes: newNotes});
      return {
        ...state,
        notes: newNotes
      }
    }  
    default:
      saveNotesToBrowser(state);
      return state;
  }
}

export default reducer;