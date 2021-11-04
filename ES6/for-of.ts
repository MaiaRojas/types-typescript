(() => {
  type avenger = {
    name: string,
    weapon: string,
  };

  const iroman: avenger = {
    name: 'Ironman',
    weapon: 'Armorsuit',
  };

  const captainAmerica: avenger = {
    name: 'CApitán América',
    weapon: 'Escudo',
  };

  const thor: avenger = {
    name: 'Thor',
    weapon: 'Mjornir',
  };

  const avengers: avenger[] = [iroman, thor, captainAmerica];

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon)
  };

})()