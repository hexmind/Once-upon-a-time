'use strict';
// https://boardgamegeek.com/filepage/28032/story-themes
angular
  .module('MyApp')
  .constant("storyThemes", {
    en: [{
      name: "Traditional",
      feel: "fairy tales as intended by the designers",
      info: "the standard Brothers Grimm fairy tales"
    }, {
      name: "Norse Tales",
      feel: "grim",
      info: "mostly rural, some sea-based",
      Denizens: "gods, quests, rings, dragons, warriors, dwarves, elves, giants"
    }, {
      name: "Slavic",
      feel: "comeuppance, irony, duty",
      info: "mostly rural, some wilderness",
      denizens: "nobles, warriors, sages, peasants, third sons, cats, nature spirits, weather"
    }, {
      name: "Greek Myth",
      feel: "epic, heroic",
      info: "rural, urban with grand architecture, ruins, far-off barbaric lands",
      denizens: "quests, gods, heroes, wise teachers, oracles, centaurs, harpies, oracles, amazons, titans, inventors, seers, giant monsters"
    }, {
      name: "Ancient Egypt",
      feel: "mystery, intrigue",
      info: "cities, deserts, royal courts, the Nile, villages in the shadow of the pyramids",
      denizens: "magic, pyramids, mummies, scribes, priests, seers, sorcerers, soldiers, peasants, snakes, crocodiles, insects"
    }, {
      name: "Deepest Africa",
      feel: "primitive, tribal, communal",
      info: "jungles, savannahs, ruins of lost civilizations, watering holes",
      denizens: "warriors, children, shamans, witches, lions and other big cats, zebras, impalas, hyenas, spirits",
    }, {
      name: "Arabian Adventures",
      feel: "the 1001 Arabian Nights, magic, religion, high adventure",
      info: "rural (like Bagdad), desert, caravans, and sea-based",
      denizens: "djinnis, peasants, thieves, sailors, viziers, beggars, priests, palace guards, pirates, sorcerers, camels, horses, monsters",
    }, {
      name: "Mysterious India",
      feel: "mystery, Kipling",
      info: "rural, villages, temples, some urban, jungles, abandoned cities and temples",
      denizens: "peasants, yogis, tigers, snakes"
    }, {
      name: "Ancient China",
      feel: "mystery, magic, alchemy, yin and yang",
      info: "urban and rural; the mists over long rivers and clouds over high mountains",
      denizens: "peasants, sages, fools, monks, priests, martial artist monks, philosophers, soldiers, courtiers, children, merchants, magistrates, wise daughters, sorcerers, barbarians, foxes, lions",
    }, {
      name: "Feudal Japan",
      feel: "grim and mysterious, socially strict",
      info: "urban and rural, royal courts, gambling dens",
      denizens: "nature spirits, samurai, ronin, damyos, yakuza, gamblers, teachers, poets, artists, monks, courtiers, foreign visitors"
    }, {
      name: "North American Indians",
      feel: "tribal",
      info: "plains, cliffs, pueblos",
      denizens: "braves, shamans, thunderbirds, nature spirits",
    }, {
      name: "At Sea",
      feel: "high adventure, maybe piracy",
      info: "ship-based, islands, ports",
      denizens: "pirates, ships, merchants, travelers, dolphins, just about anything"
    }, {
      name: "Space/SF",
      feel: "sci-fi fun",
      info: "any place, any time",
      denizens: "robots, monsters, aliens, historic figures, space ships, time machines"
    }, {
      name: "Victorian",
      feel: "restrained, elegant, weird science, could be like 'His Dark Materials', 'Dracula', or 'Frankenstein'",
      info: "1850-1900, urban, exploring the edges of the world",
      denizens: "scientists, inventors, explorers, soldiers, lords and ladies, merchants, workers, children, mediums, faerie, vampires",
    }, {
      name: "Modern",
      feel: "droll",
      info: "urban, 20th-21st centuries",
      denizens: "anything found today",
    }, {
      name: "Risque",
      info: "from the naughty (PG-13) to the erotic (R-rated). An erotic romp through the world of the Grimm."
    }]
  })
