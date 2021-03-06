import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('profile', function() {
    this.route('chpw');
  });
  this.route('logbook');
  this.route('workitem');

  this.route('admin', function() {
    this.route('tags');
  });
});

export default Router;
