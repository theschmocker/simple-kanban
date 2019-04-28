import produce from 'immer';

import { initialState } from './initialstate';

import { RENAME_COLUMN } from '../actions/types';

const { columns: initialColumns } = initialState;

const columnReducer = produce((columns = initialColumns, action) => {
  switch (action.type) {
    case RENAME_COLUMN: {
      const { columnID, newName } = action.data;
      const column = columns.find(column => column.id === columnID);

      column.name = newName;
      break;
    }

    default:
      return columns;
  }
});

export default columnReducer;