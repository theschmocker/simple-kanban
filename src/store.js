import { createStore } from 'redux';
import reducers from './reducers/index';

import { STORAGE_KEY } from './util/constants';

export const store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    const serializedState = JSON.stringify(store.getState());
    localStorage.setItem(STORAGE_KEY, serializedState);
});