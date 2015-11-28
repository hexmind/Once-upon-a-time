'use strict';
angular
  .module('MyApp')
  .service("deckService", function(deckConstants) {

    function getAllCards(settings) {
      var lang = settings.language;
      return deckConstants[lang].basic;
    }

    function isEnding(e) {
      return e.group === 'ending';
    }

    function createCard(data) {
      return _.assign(data, {
        visible: true,
        icon: getMdiIcon(data.group)
      });
    }

    function getMdiIcon(tag) {
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

    // deprecated
    function getIcon(tag) {
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

    this.drawCards = function(settings) {
      var deck = getAllCards(settings);
      var cards = settings.cards;
      var ending = _.chain(deck).shuffle().find(isEnding).value();
      var hand = _.chain(deck).shuffle().reject(isEnding).take(cards).sortByAll(['interrupt', 'group']).value();
      hand.push(ending);
      return _.map(hand, createCard);
    }
  })
