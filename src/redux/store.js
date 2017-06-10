import { createStore } from 'redux';

const reducer = (state = {}) => state;

const configureStore = (initialState = {}) => createStore(reducer, initialState);

export default configureStore;
