import { Meteor } from 'meteor/meteor';

import { Bins } from '../imports/api/bins';

Meteor.startup(() => {
  Meteor.publish('bins', function() {
    let ownerId = this.userId;

    return Bins.find({ ownerId });
  });
});
