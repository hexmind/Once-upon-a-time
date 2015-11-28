'use strict';
angular
  .module('MyApp')
  .service('translateSevice', function(translatedConstants) {

    this.setLanguage = function(language) {
      this.language = language;
    }

    this.get = function(value, language) {
      var lang = language || this.language;
      return translatedConstants[value][lang];
    }

    this.setLanguage('en');

  })
  .constant("translatedConstants", {
    ending: {
      en: 'Ending',
      pl: 'Zakończenie'
    }
  })
