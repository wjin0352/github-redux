var React = require('react');
var ReactDOM = require('react-dom');
// Provider passes redux store down to any components that request access to part of it.
var Provider = require('react-redux').Provider;

var store = require('./store');
var RepositoryList = require('./repository-list');

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
      <RepositoryList />
    </Provider>,
    document.getElementById('app')
  );
});
