import React from 'react';
import { connect } from 'react-redux';

import Column from './Column';

const Board = ({ columns }) => {
    return (
        <div className="board">
            {columns && columns.map(column => (
                <Column
                    key={column.id}
                    column={column}
                />
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        columns: state.columns,
    }
}

export default connect(mapStateToProps)(Board);