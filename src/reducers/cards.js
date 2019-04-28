import uuid from 'uuid/v4';
import produce from 'immer';

import { initialState } from './initialstate';

import { MOVE_CARD, CREATE_CARD, DELETE_CARD } from '../actions/types';

const { cards: initialCards } = initialState;

const cardReducer = produce((cards = initialCards, action) => {
  switch (action.type) {
    case CREATE_CARD: {
      const { columnID, text } = action.data;

      const newCardID = uuid();
      const newCard = {
        id: newCardID,
        text,
        columnID,
      }

      cards.push(newCard);
      break;
    }
    case DELETE_CARD: {
      const { cardID } = action.data;
      const index = cards.findIndex(card => card.id === cardID);

      cards.splice(index, 1);
      break;
    }
    case MOVE_CARD: {
      const { cardID, columnID } = action.data;

      const card = cards.find(card => card.id === cardID);
      card.columnID = columnID;

      break;
    }
    default:
      return cards;
  }
});

export default cardReducer;