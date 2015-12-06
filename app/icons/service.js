'use strict';
angular
  .module('MyApp')
  .service("iconsService", function() {

    this.getMdiIcon = function(tag) {
      var mapping = {
        item: 'book',
        character: 'account',
        event: 'calendar',
        places: 'map-marker',
        aspect: 'star',
        ending: 'check'
      }
      var value = mapping[tag] || 'help';
      return "mdi mdi-" + value;
    }

    this.getIcon = function(tag) {
      var mapping = {
        item: 'book',
        character: 'face',
        event: 'event',
        places: 'place',
        aspect: 'star',
        ending: 'done'
      }
      return mapping[tag] || 'help';
    }
  })
