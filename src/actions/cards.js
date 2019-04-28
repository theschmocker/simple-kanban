import { CREATE_CARD, DELETE_CARD, MOVE_CARD } from './types';

export const createCard = (text, columnID) => ({
  type: CREATE_CARD,
  data: {
    columnID,
    text,
  }
})
export const deleteCard = cardID => ({
  type: DELETE_CARD,
  data: {
    cardID,
  }
})
export const moveCard = (cardID, columnID) => ({
  type: MOVE_CARD,
  data: {
    cardID,
    columnID,
  }
})