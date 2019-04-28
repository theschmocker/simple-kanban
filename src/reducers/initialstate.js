import uuid from 'uuid/v4';

import { STORAGE_KEY } from '../util/constants';

const getStoredStateOrInitialState = () => {
    const storedState = localStorage.getItem(STORAGE_KEY);
    if (storedState != null && storedState !== '') {
        return JSON.parse(storedState);
    } else {
        const initialCardIDs = (new Array(4)).fill(0).map(_ => uuid());
        const initialColumnIDs = (new Array(4)).fill(0).map(_ => uuid());

        const initialState = {
            columns: [
                {
                    id: initialColumnIDs[0],
                    name: 'Backlog',
                },
                {
                    id: initialColumnIDs[1],
                    name: 'Ready for Work',
                },
                {
                    id: initialColumnIDs[2],
                    name: 'In Progress',
                },
                {
                    id: initialColumnIDs[3],
                    name: 'Done',
                },
            ],
            cards: [
                {
                    id: initialCardIDs[0],
                    text: 'Install React',
                    columnID: initialColumnIDs[3]
                },
                {
                    id: initialCardIDs[1],
                    text: 'Learn Databases',
                    columnID: initialColumnIDs[0]
                },
                {
                    id: initialCardIDs[2],
                    text: 'Rewrite Kanban',
                    columnID: initialColumnIDs[2]
                },
                {
                    id: initialCardIDs[3],
                    text: 'Prototype Kanban',
                    columnID: initialColumnIDs[3]
                },
            ]
        }

        return initialState;
    }
}

export const initialState = getStoredStateOrInitialState();