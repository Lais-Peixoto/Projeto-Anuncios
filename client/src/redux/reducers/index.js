import { combineReducers } from 'redux';
import AdReducer from '../ads/AdReducer.js';

const rootReducer = combineReducers({
    anuncios: AdReducer
});

export default rootReducer;