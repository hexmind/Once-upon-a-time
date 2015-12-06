'use strict';
angular
  .module('MyApp')
  .service("deckService", function(deckConstants, iconsService) {

    const getAllCards = settings => {
      var lang = settings.language;
      return deckConstants[lang].basic;
    }

    const createCard = data => {
      var mdiIcon = iconsService.getMdiIcon(data.group);
      var icon = iconsService.getIcon(data.group);
      return _.assign(data, {
        visible: true,
        mdiIcon: mdiIcon,
        icon: icon
      });
    }

    this.drawCards = function(settings) {
      const isEnding = e => e.group === 'ending';
      var deck = getAllCards(settings);
      var cards = settings.cards;
      var ending = _.chain(deck).shuffle().find(isEnding).value();
      var hand = _.chain(deck).shuffle().reject(isEnding).take(cards).sortByAll(['interrupt', 'group']).value();
      hand.push(ending);
      return _.map(hand, createCard);
    }
  })
