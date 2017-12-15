function theBeatlesPlay(musicians,instruments){
  var array = [];
  for (let i=0; i < players.length; i++) {
      allPlayers.push(players[i] + "plays" + instruments[i]);
  }
  return allPlayers;
}

+function theBeatlesPlay(musicians, instruments) {
 +  var array = [];
 +  for (let i = 0; i < musicians.length; i++) 
 +  {
 +    var string = `${musicians[i]} plays ${instruments[i]}`;
 +    array.push(string);
 +  }
 +  return array