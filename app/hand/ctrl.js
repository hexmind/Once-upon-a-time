angular
  .module('MyApp')
  .controller('handCtrl', function($scope, deckService, appConstants, translateSevice) {

    var self = this;
    this.cards = [];

    $scope.$on('gameStartedEvent', onGameStartedEvent);

    if (appConstants.autostart) {
      initHand({
        cards: 9,
        language: 'pl'
      })
    }

    function onGameStartedEvent(event, settings) {
      console.debug('started ', settings);
      initHand(settings);
    }

    function initHand(settings) {
      self.cards = deckService.drawCards(settings);
      translateSevice.setLanguage(settings.language);
    }

    this.toggle = function(index) {
      var selected = !this.selected;
      _.each(this.cards, c => {
        c.visible = !selected;
      });
      this.selected = selected;
      this.cards[index].visible = true;
    }

    this.discard = function(index) {
      this.cards[index].discarded = true;
    }

    this.restore = function(index) {
      this.cards[index].discarded = false;
    }

    this.getEndingTitle = function() {
      return translateSevice.get('ending');
    }

  });
