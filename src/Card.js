import React from "react";
import { connect } from "react-redux";

import { moveCard, deleteCard } from './actions/cards';
import { getPreviousAndNextColumnIDs } from './util';

export const Card = ({ card, remove, move, previousColumnID, nextColumnID }) => {
  return (
    <li className="card">
      {previousColumnID && 
        <button onClick={() => { move(previousColumnID) }}>&lt;</button>
      }
      <span>
        {card.text} <button onClick={remove}>Delete</button>
      </span>
      {nextColumnID && 
        <button onClick={() => { move(nextColumnID) }}>&gt;</button>
      }
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { previousColumnID, nextColumnID } = getPreviousAndNextColumnIDs(
    state.columns,
    ownProps.card.columnID
  );

  return {
    columns: state.columns,
    previousColumnID,
    nextColumnID,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    move: columnID => {
      dispatch(moveCard(ownProps.card.id, columnID));
    },
    remove: () => {
      dispatch(deleteCard(ownProps.card.id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
