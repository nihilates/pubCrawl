var randomName = function(gender) {
  var firstNames = {
    human: {
      m: ['Anton', 'Diero', 'Marcon', 'Pieron', 'Rimardo', 'Romero', 'Salazar', 'Umbero', 'Darvin', 'Dorn', 'Evendur', 'Gorstag', 'Grim', 'Helm', 'Malark', 'Morn', 'Randal', 'Stedd'],
      f: ['Balama', 'Dona', 'Faila', 'jalana', 'Luisa', 'Marta', 'Quara', 'Selise', 'Vonda', 'Arveene', 'Esvele', 'jhessail', 'Kerri', 'Lureene', 'Miri', 'Rowan', 'Shandri', 'Tessele']
    }, //humans
    dwarf: {
      m: ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor', 'Bruenor', 'Oain', 'Oarrak', 'Oelg', 'Eberk', 'Einkil', 'Fargrim', 'Flint','Gardain', 'Harbek', 'Kildrak', 'Morgran', 'Orsik', 'Oskar', 'Rangrim', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Veit', 'Vondal'],
      f: ['Amber', 'Artin', 'Audhild', 'Bardryn', 'Oagnal', 'Oiesa', 'Eldeth', 'Falkrunn', 'Finellen', 'Gunnloda', 'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Kristryd', 'lide', 'Liftrasa', 'Mardred', 'Riswynn', 'Sannl', 'Torbera', 'Torgga', 'Vistra']
    }, //dwarves
    elf: {
      m: ['Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro', 'Berrian', 'Carrie', 'Enialis', 'Erdan', 'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Laucian', 'Mindartis', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren', 'Varis'],
      f: ['Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Bethrynna', 'Birel', 'Caelynn', 'Orusilia', 'Enna', 'Felosial', 'Lelenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Meriele', 'Mialee', 'Naivara', 'Quelenna', 'Quillathe', 'Sariel', 'Shanairra', 'Shava', 'Silaqui', 'Theirastra', 'Thia', 'Vadania', 'Valanthe', 'Xanaphia']
    }//elves
  };//end of first name pool

  var surnames = {
    human: ['Agosto', 'Astorio', 'Calabra', 'Domine', 'Falone', 'Marivaldi', 'Pisacar', 'Ramondo', 'Amblecrown', 'Buckman', 'Dundragon', 'Evenwood', 'Greycastle', 'Tallstag'], //humans
    dwarf: ['Balderk', 'Battlehammer', 'Brawnanvil', 'Oankil', 'Fireforge', 'Frostbeard', 'Gorunn', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart'], //dwarves
    elf: ['Amakiir', 'Amastacia', 'Galanodel', 'Holimion', 'IIphelkiir', 'Liadon', 'Meliamne', 'Nailo', 'Siannodel', 'Xiloscient', 'Gemflower', 'Starflower', 'Moonwhisper', 'Diamonddew', 'Gemblossom', 'Silverfrond', 'Oakenheel', 'Nightbreeze', 'Moonbrook', 'Goldpetal'] //elves
  };//end of surname pool

};