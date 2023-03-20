// This program helps create, retrieve, and add information about your favorite team. I used JavaScript data structures: arrays and objects.

//store the information about the team
const team = {
  _players: [{ firstName: "" }, { lastName: "" }, { age: 0 }],
  _games: [{ opponent: 0 }, { teampoints: 0 }, { opponentPoints: 0 }],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  // method to add a new player
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  // method to add a new game results
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

// add game results using this method
team.addGame("Titans", 100, 98);
// add players using this method
team.addPlayer("Bugs", "Bunny", "76");

//print players and games
console.log(team._players);
console.log(team._games);
