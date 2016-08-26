var React = require('react');
// Once provider is in place, components can access parts of store, including dispatch method using connect method.
var connect = require('react-redux').connect;
var Repository = require('./repository');
var actions = require('./actions');

var RepositoryList = React.createClass({
  addRepository: function() {
    // value of input from user
    var repositoryName = this.refs.repositoryName.value;
    // Add the repo to the state
    // dispatching the correct actions when user interacts with app.
    this.props.dispatch(actions.addRepository(repositoryName));
  },

  render: function() {
    var repositories = this.props.repositories.map(function(repository) {
      return <Repository repository={repository} key={repository.name} />;
    });

    return (
      <div className='repository-list'>
        {repositories}
        <input type='text' ref='repositoryName' />
        <button type='button' onClick={this.addRepository}>
          Add repository
        </button>
      </div>
    );
  }
});

// different parts of the state is inserted into the props of the component to be accessed.
var mapStateToProps = function(state, props) {
  return {
    repositories: state
  };
};
// the connect method also inserts dispatch function by default.
var Container = connect(mapStateToProps)(RepositoryList);

// module.exports = RepositoryList;
// allows us to export the connected redux version of the component with access to the store
module.exports = Container;

