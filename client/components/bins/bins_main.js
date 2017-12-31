import React, { Component } from 'react';

class BinsMain extends Component {
  render() {
    const { binId } = this.props.match.params;

    return (
      <div>BinsMain</div>
    );
  }
};

export default BinsMain;
