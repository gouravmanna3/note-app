import _ from 'lodash';



function lodaStateFromLocalStorage() {
  const stringState = window.localStorage.getItem('notes');
  if(stringState && !_.isEmpty(JSON.parse(stringState))) {
    return JSON.parse(stringState);
  }
  return null;
}

export const initialState = lodaStateFromLocalStorage() || {
  notes: [
    {
      id: '0',
      title: 'Note 1',
      data: 'Hello I am Gourav Manna'
    }
  ]
};

  