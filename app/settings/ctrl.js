angular
  .module('MyApp')
  .controller('settingsCtrl', function($rootScope, appConstants) {

    var cardsPerPlayers = appConstants.cardsPerPlayers;
    this.playersOptions = _.keys(cardsPerPlayers);
    this.players = _.first(this.playersOptions);

    this.languagesOptions = {
      en: 'english',
      pl: 'polish'
    };
    this.language = _.chain(this.languagesOptions).keys().first().value();
    this.visible = true;

    this.startGame = function() {
      this.visible = false;
      var settings = {
        cards: cardsPerPlayers[this.players],
        language: this.language
      };
      $rootScope.$broadcast('gameStartedEvent', settings);
    }

  });
