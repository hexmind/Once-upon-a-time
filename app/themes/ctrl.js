angular
  .module('MyApp')
  .controller('storyCtrl', function(storyThemes) {

    const formatTheme = data => {
      return {
        name: data.name,
        body: [{
          title: "How",
          content: data.feel
        }, {
          title: "What",
          content: data.info
        }, {
          title: "Who",
          content: data.denizens
        }]
      };
    }

    this.drawTheme = function() {
      var themes = storyThemes.en;
      this.theme = _.chain(themes).shuffle().take(1).map(formatTheme).first().value();
    }

    this.drawTheme();

  });
