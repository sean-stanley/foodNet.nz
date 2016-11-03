import { Neo4j } from '../collection';
import { Meteor } from 'meteor/meteor';

Meteor.publish('Neo4j.query', function (query) {
  return Neo4j.query(query);
});
