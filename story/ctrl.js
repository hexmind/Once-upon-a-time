angular
  .module('MyApp')
  .controller('storyCtrl', function(storyThemes) {

  this.drawTheme = function(){
    var themes = storyThemes.en;
    this.theme = _.chain(themes).shuffle().first().value();
  }

  this.drawTheme();

});
