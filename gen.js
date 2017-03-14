//module.exports = {
var dnd = {
  //method to randomly generate NPC
  makeCrowd: function(tavSize, tavTheme) {

    var roll = function(max) {
      return Math.floor(Math.random()*max)
    }; //randomly generated number

    var randomNPC = function(tavTheme) {
      var gender = ['m', 'f'][roll(2)];

      var racialOptions = ['human','dwarf', 'elf'];
      var race = (function(){ // racialOptions[roll(racialOptions.length)];
        var value = {Human: 'human', Elven: 'elf', Dwarven: 'dwarf'};
        if (tavTheme) {
          var d20 = 1+roll(20);
          if (d20>=15) {
            return value[tavTheme];
          } else {
            return racialOptions[roll(racialOptions.length)];
          }
        } else {
          return racialOptions[roll(racialOptions.length)];
        }
      })();

      var charClasses = [
        ['Commoner', 'Staff'],
        ['Barbarian','Bard','Cleric','Druid','Fighter','Monk','Paladin','Ranger','Rogue','Sorcerer','Warlock','Wizard']
      ];
      var charClass = (function(){
        var d20 = 1+roll(20);
        if (d20>7) {
          return charClasses[1][roll(charClasses[1].length)];
        } else {
          return charClasses[0][roll(2)];
        }
      })();

      var firstNames = {
        human: {
          m: ['Anton', 'Diero', 'Marcon', 'Pieron', 'Rimardo', 'Romero', 'Salazar', 'Umbero', 'Darvin', 'Dorn', 'Evendur', 'Gorstag', 'Grim', 'Helm', 'Malark', 'Morn', 'Randal', 'Stedd'],
          f: ['Balama', 'Dona', 'Faila', 'Jalana', 'Luisa', 'Marta', 'Quara', 'Selise', 'Vonda', 'Arveene', 'Esvele', 'Jhessail', 'Kerri', 'Lureene', 'Miri', 'Rowan', 'Shandri', 'Tessele']
        }, //humans
        dwarf: {
          m: ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor', 'Bruenor', 'Oain', 'Oarrak', 'Oelg', 'Eberk', 'Einkil', 'Fargrim', 'Flint','Gardain', 'Harbek', 'Kildrak', 'Morgran', 'Orsik', 'Oskar', 'Rangrim', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Veit', 'Vondal'],
          f: ['Amber', 'Artin', 'Audhild', 'Bardryn', 'Oagnal', 'Oiesa', 'Eldeth', 'Falkrunn', 'Finellen', 'Gunnloda', 'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Kristryd', 'Lide', 'Liftrasa', 'Mardred', 'Riswynn', 'Sannl', 'Torbera', 'Torgga', 'Vistra']
        }, //dwarves
        elf: {
          m: ['Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro', 'Berrian', 'Carrie', 'Enialis', 'Erdan', 'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Laucian', 'Mindartis', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren', 'Varis'],
          f: ['Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Bethrynna', 'Birel', 'Caelynn', 'Orusilia', 'Enna', 'Felosial', 'Lelenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Meriele', 'Mialee', 'Naivara', 'Quelenna', 'Quillathe', 'Sariel', 'Shanairra', 'Shava', 'Silaqui', 'Theirastra', 'Thia', 'Vadania', 'Valanthe', 'Xanaphia']
        } //elves
      }; //end of first name pool
      var surnames = {
        human: ['Agosto', 'Astorio', 'Calabra', 'Domine', 'Falone', 'Marivaldi', 'Pisacar', 'Ramondo', 'Amblecrown', 'Buckman', 'Dundragon', 'Evenwood', 'Greycastle', 'Tallstag'], //humans
        dwarf: ['Balderk', 'Battlehammer', 'Brawnanvil', 'Oankil', 'Fireforge', 'Frostbeard', 'Gorunn', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart'], //dwarves
        elf: ['Amakiir', 'Amastacia', 'Galanodel', 'Holimion', 'IIphelkiir', 'Liadon', 'Meliamne', 'Nailo', 'Siannodel', 'Xiloscient', 'Gemflower', 'Starflower', 'Moonwhisper', 'Diamonddew', 'Gemblossom', 'Silverfrond', 'Oakenheel', 'Nightbreeze', 'Moonbrook', 'Goldpetal'] //elves
      }; //end of surname pool
      var firstName = firstNames[race][gender];
      var surname = surnames[race]

      return {
        name: firstName[roll(firstName.length)] +' '+ surname[roll(surname.length)],
        gender: gender,
        race: race,
        class: charClass
      };
    }; //end of randomNPC

    var tavernSize = {
      'Large': 27,
      'Medium': 14,
      'Small': 7
    };
    var crowdSize = tavernSize[tavSize]+roll(5);
    var crowd = [];

    for (let i=0; i<=crowdSize; i++) {
      var patron = randomNPC(tavTheme);
      crowd.push(patron);
    }

    return crowd;
  },//end of makeNPC method

  makeTavern: function (tavTheme, tavQuality) {

    var roll = function(max) {
      return Math.floor(Math.random()*max)
    }; //randomly generated number

    var randomTavName = function (tavTheme, tavQuality) {
      var tavernPrefix = {
        human: {
          Sqaulor: ['The Rusty', 'The Filthy', 'Vile', 'Broken', 'Raspscallion\'s', 'The Windy', 'Gnoll\'s', 'Papa\'s', 'The Scurvy', 'Midnight'],
          Average: ['The Dusty', 'The Shady', 'Morning', 'The Proud', 'Dorian\'s', 'The Singing', 'Wanderer\'s', 'Ye Olde', 'The Vagrant'],
          Opulent: ['Evening', 'The Daily', 'The King\'s', 'Luminous', 'Mermaiden\'s', 'The Dragon\'s', 'Grand', 'The Royal', 'Queen of']
        },
        dwarf: {
          Sqaulor: ['The Deep', 'Smuggler\'s', 'Cutthroat', 'The Thirsty', 'The Salty', 'Rough-Cut', 'Hammer and', 'The Drunken'],
          Average: ['The Forge At', 'High Mountain', 'Brave', 'The Iron', 'Seamus\'s', 'The Last', 'Frosty', 'The Clay', 'The Laughing'],
          Opulent: ['Golden', 'The Mastercraft', 'The Ornate', 'The Jarl\'s', 'The Illustrious', 'The Fabled', 'Glimmergold', 'Earthen']
        },
        elf: {
          Sqaulor: ['The Uncouth', 'The Dried', 'The Discordant', 'The Tarnished', 'Melf\'s', 'Winter\'s', 'Braggish', 'Last Week\'s'],
          Average: ['The Gilded', 'Nature\'s', 'Slumbering', 'Fey', 'Wyldwood', 'The Whimsical', 'The Studious', 'The Dreaming', 'Spring\'s'],
          Opulent: ['Aelyndar\'s', 'Immortal', 'The Shimmering', 'The Ephemeral', 'The Verdant', 'Symphony of a', 'Enchanted', 'The Indulgent']
        }
      }//end of prefix

      var tavernSuffix = {
        Sqaulor: ['Screwdriver', 'Shiv', 'Secret', 'Hideaway', 'Rathole', 'Dungeon', 'Regret', 'Hovel', 'Shanty', 'Keg', 'Donkey', 'Gamble'],
        Average: ['Public House', 'Tavern', 'Distillery', 'Alehouse', 'Inn', 'Refresher', 'Yardhouse', 'Quarters', 'Choice'],
        Opulent: ['Winery', 'Gardens', 'Hotel', 'Club', 'Banquet Hall', 'Bistro', 'Society', 'Chateau', 'Pride']
      }//end of suffix
    var value = {Human: 'human', Elven: 'elf', Dwarven: 'dwarf'};
    var prefix = tavernPrefix[value[tavTheme]][tavQuality];
    var suffix = tavernSuffix[tavQuality];

    return prefix[roll(prefix.length)] +' '+ suffix[roll(suffix.length)];
    };//end of randomTavName
    return {name: randomTavName(tavTheme, tavQuality)};
  }//end of makeTavern
};//end of module