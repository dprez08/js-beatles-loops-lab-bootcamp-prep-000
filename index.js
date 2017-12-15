function theBeatlesPlay(players,instruments){
  var allPlayers = [];
  for (var i=1; i < players.length; i++){
      allPlayers.push(players[i] + "plays" + instruments[i]);
  }
  return allPlayers;
}

