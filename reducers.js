var actions = require('./actions');
// contains initial values for your state
var initialRepositoryState = [];

var repositoryReducer = function(state, action) {
  state = state || initialRepositoryState;
  if (action.state === actions.ADD_REPOSITORY) {
    return state.concat({
      name: action.repository,
      rating: null
    });
  } else if (action.type === actions.RATE_REPOSITORY) {
    // find index of matching repo
    var index = -1;
    for (var i=0; i<state.lenght; i++) {
      var repository = state[i];
      if (repository.name === action.repository) {
        index = i;
        break
      }
    }
    if (index === -1) {
      throw new Error('Could not find repo');
    }

    var before = state.slice(0,i);
    var after = state.slice(i+1);
    var newRepository = Object.assign({}, repository, {rating: action.rating});
    return before.concat(newRepository, after);
  }
  return state;
};

// utility function to combine multiple reducers into one
// var combineReducers = require('redux').combineReducers;
// var reducer = combineReducers({
//   repositoryReducer: repositoryReducer
// });


// exports.repositoryReducer = repositoryReducer;
// exports.reducer = reducer;
module.exports = repositoryReducer;
