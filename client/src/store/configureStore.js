import { createStore, combineReducers } from 'redux';

import itemReducer from '../reducers/itemReducer';
import modalReducer from '../reducers/modalReducer';

export default () => (
    createStore(
        combineReducers({
            items: itemReducer,
            isModalOpen: modalReducer
        })
    )
)