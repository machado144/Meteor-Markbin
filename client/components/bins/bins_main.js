import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Bins } from '../../../imports/api/bins';
import BinsEditor from './bins_editor';
import BinsViewer from './bins_viewer';
import BinsShare from './bins_share';

class BinsMain extends Component {
  render() {
    if (!this.props.bin) { return <div>Loading...</div> }

    return (
      <div>
        <BinsEditor bin={this.props.bin}/>
        <BinsViewer bin={this.props.bin}/>
        <BinsShare bin={this.props.bin}/>
      </div>
    );
  }
};

export default withTracker((props) => {
  const { binId } = props.match.params;
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

  return { bin: Bins.findOne(binId) };
})(BinsMain);
