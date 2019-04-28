import React from 'react';
import { connect } from 'react-redux';

import { createCard } from './actions/cards';
import { renameColumn } from './actions/columns'

import Card from './Card';

const Column = ({ cards, column, createCard, renameColumn }) => {
    const addCard = () => {
        const newCard = window.prompt('Add a new card') || null;
        if (newCard) {
            createCard(newCard);
        }
    }

    const rename = () => {
        const newName = window.prompt(`Rename ${column.name} to:`) || null;
        if (newName) {
            renameColumn(newName);
        }
    }

    return (
        <section className="column">
            <h2 onClick={rename} className="column-name">{column.name}</h2>
            <ul className="cards">
                {cards && cards.map((card, cardIndex) => (
                    <Card
                        key={cardIndex}
                        card={card}
                    />
                ))}
            </ul>
            <button href="#" onClick={addCard}>+ Add a card</button>
        </section>
    );
}

const mapStateToProps = (state, ownProps) => {
    const cards = state.cards.filter(card => card.columnID === ownProps.column.id);

    return {
        cards
    };
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createCard: text => {
            dispatch(createCard(text, ownProps.column.id));
        },
        renameColumn: newName => {
            dispatch(renameColumn(ownProps.column.id, newName));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Column);