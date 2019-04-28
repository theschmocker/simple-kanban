import { RENAME_COLUMN } from './types';

export const renameColumn = (columnID, newName) => ({
    type: RENAME_COLUMN,
    data: {
        newName,
        columnID,
    }
})