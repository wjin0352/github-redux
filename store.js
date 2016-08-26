// store keeps hold of the state, and allows you to dispatch actions to modify the state.
var redux = require('redux');
var createStore = redux.createStore;

var reducer = require('./reducers');

// created a store using createStore, telling it to use repositoryReducer to handle actions which are dispatched.
var store = createStore(reducer);
module.exports = store;



