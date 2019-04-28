export const getPreviousAndNextColumnIDs = (columns, currentColumnID) => {
    const currentColumnIndex = columns.findIndex(column => column.id === currentColumnID);
    const previousColumnIndex = currentColumnIndex - 1;
    const nextColumnIndex = currentColumnIndex + 1;

    const previousColumnID = previousColumnIndex >= 0 && columns[previousColumnIndex].id;
    const nextColumnID =  nextColumnIndex < columns.length && columns[nextColumnIndex].id;

    return {
        previousColumnID,
        nextColumnID,
    }
}