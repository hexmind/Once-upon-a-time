'use strict';
angular
  .module('MyApp')
  .service("deckService", function(deckConstants){

  function getAllCards(settings){
    var lang = settings.language;
    return deckConstants[lang].basic;
  }

  function isEnding(e){
    return e.group === 'ending';
  }

  function createCard(data){
    return _.assign(data, {
      visible: true,
      icon: getIcon(data.group)
    });
  }

  function getIcon(tag){
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

  this.drawCards = function(settings){
    var deck = getAllCards(settings);
    var cards = settings.cards;
    var ending = _.chain(deck).shuffle().find(isEnding).value();
    var hand = _.chain(deck).shuffle().reject(isEnding).take(cards).sortByAll(['interrupt', 'group']).value();
    hand.push(ending);
    return _.map(hand, createCard);
  }
})
