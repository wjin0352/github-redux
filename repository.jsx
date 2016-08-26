var React = require('react');
var connect = require('react-redux').connect;

var StarRater = require('./star-rater');
var actions = require('./actions');

var Repository = React.createClass({
  changeRating: function(rating) {
    // change the rating
    this.props.dispatch(
      actions.rateRepository(this.props.repository.name, rating)
    );
  },
  render: function() {
    return (
      <div className='repository'>
        {this.props.repository.name}
        &nbsp'
        <StarRater rating={this.props.repository.rating}
          onChange={this.changeRating} />
      </div>
    );
  }
});

// Notice you didnt pass mapStateToProps to connect, this means only the dispatch prop will be added.  connect lets the component access the redux store, and access dispatch method.  The repository-list component is the parent to this and will pass the data into this component for us.  This is a dumb component while the repository-list is a smart component getting state and turning it into props attributes.
var Container = connect()(Repository);

// module.exports = Repository;
module.exports = Container;
