import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Bins } from '../../../imports/api/bins';
import BinsEditor from './bins_editor';

class BinsMain extends Component {
  render() {
    if (!this.props.bin) { return <div>Loading...</div> }

    return (
      <div>
        <BinsEditor bin={this.props.bin}/>
      </div>
    );
  }
};

export default withTracker((props) => {
  const { binId } = props.match.params;
  Meteor.subscribe('bins');

  return { bin: Bins.findOne(binId) };
})(BinsMain);
