import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/api/bins';

class BinsList extends Component {
  render() {
    console.log(this.props.bins);
    return (
      <div>Bins List</div>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('bins');

  return { bins: Bins.find({}).fetch() };
})(BinsList);
