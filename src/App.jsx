import { useState, useEffect } from 'react';
import PlayerCard from './components/PlayerCard.jsx'; // Adjust path if needed

function App() {

  const myFavoriteFootballTeam = {
    team: "Argentina",
    sport: "Football",
    year: 1986,
    isWorldCupWinner: true,
    headCoach: {
      coachName: "Carlos Bilardo",
      matches: 7,
    },
    players: [
      {
        name: "Sergio Almirón",
        position: "forward",
        number: 1,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Sergio Batista",
        position: "midfielder",
        number: 2,
        isCaptain: false,
        nickname: null,
      },
       {
        name: "Ricardo Bochini",
        position: "midfielder",
        number: 3,
        isCaptain: false,
        nickname: "El Bocha",
      },
      {
        name: "Claudio Borghi",
        position: "midfielder",
        number: 4,
        isCaptain: false,
        nickname: "Bichi",
      },
      {
        name: "José Luis Brown",
        position: "defender",
        number: 5,
        isCaptain: false,
        nickname: "Tata",
      },
      {
        name: "Daniel Passarella",
        position: "defender",
        number: 6,
        isCaptain: false,
        nickname: "El Gran Capitán",
      },
      {
        name: "Jorge Burruchaga",
        position: "forward",
        number: 7,
        isCaptain: false,
        nickname: "Burru",
      },
      {
        name: "Néstor Clausen",
        position: "defender",
        number: 8,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "José Luis Cuciuffo",
        position: "defender",
        number: 9,
        isCaptain: false,
        nickname: "El Cuchu",
      },
      {
        name: "Diego Maradona",
        position: "midfielder",
        number: 10,
        isCaptain: true,
        nickname: "El Pibe de Oro",
      },
      {
        name: "Jorge Valdano",
        position: "forward",
        number: 11,
        isCaptain: false,
        nickname: "The Philosopher of Football",
      },
      {
        name: "Héctor Enrique",
        position: "midfielder",
        number: 12,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Oscar Garré",
        position: "defender",
        number: 13,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Ricardo Giusti",
        position: "midfielder",
        number: 14,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Luis Islas",
        position: "goalkeeper",
        number: 15,
        isCaptain: false,
        nickname: "El loco",
      },
      {
        name: "Julio Olarticoechea",
        position: "defender",
        number: 16,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Pedro Pasculli",
        position: "forward",
        number: 17,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Nery Pumpido",
        position: "goalkeeper",
        number: 18,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Oscar Ruggeri",
        position: "defender",
        number: 19,
        isCaptain: false,
        nickname: "El Cabezón",
      },
      {
        name: "Carlos Tapia",
        position: "midfielder",
        number: 20,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Marcelo Trobbiani",
        position: "midfielder",
        number: 21,
        isCaptain: false,
        nickname: "Calesita",
      },
      {
        name: "Héctor Zelada",
        position: "goalkeeper",
        number: 22,
        isCaptain: false,
        nickname: null,
      },
    ],
  };

  Object.freeze(myFavoriteFootballTeam);
  const { sport, team, year, players } = myFavoriteFootballTeam;
  const { coachName } = myFavoriteFootballTeam.headCoach;

  const [filter, setFilter] = useState('all'); // Default to 'all'
  const [displayedPlayers, setDisplayedPlayers] = useState(players); // Initially show all players

  useEffect(() => {
    // This code runs whenever the 'filter' state changes
    let filteredPlayers;
    switch (filter) {
      case "nickname":
        filteredPlayers = players.filter((player) => player.nickname !== null);
        break;
      case "forward":
        filteredPlayers = players.filter((player) => player.position === "forward");
        break;
      case "midfielder":
        filteredPlayers = players.filter((player) => player.position === "midfielder");
        break;
      case "defender":
        filteredPlayers = players.filter((player) => player.position === "defender");
        break;
      case "goalkeeper":
        filteredPlayers = players.filter((player) => player.position === "goalkeeper");
        break;
      default: // 'all'
        filteredPlayers = players;
    }
    setDisplayedPlayers(filteredPlayers); // Update the state for displayed players
  }, [filter]); // Dependency array: re-run effect if filter or players change  

  return (
    <>
      <h1 className="title">Team stats</h1>
      <main>
        <div className="team-stats">
          <p>Team: <span id="team">{team}</span></p>
          <p>Sport: <span id="sport">{sport}</span></p>
          <p>Year: <span id="year">{year}</span></p>
          <p>Head coach: <span id="head-coach">{coachName}</span></p>
        </div>
        <label className="options-label" htmlFor="players">Show Player Cards For:  </label>
        <select
          name="players"
          id="players"
          value={filter} // Controlled component: value comes from state
          onChange={(e) => setFilter(e.target.value)} // Update state on change
        >
          {/* Options remain the same */}
          <option value="all">All Players</option>
          <option value="nickname">Nicknames</option>
          <option value="forward">Position Forward</option>
          <option value="midfielder">Position Midfielder</option>
          <option value="defender">Position Defender</option>
          <option value="goalkeeper">Position Goalkeeper</option>
        </select>
        <div className="cards" id="player-cards">
          {/* Map over the displayed players array */}
          {displayedPlayers.map((player) => (
            <PlayerCard player={player} key={player.number} />
          ))}
        </div>
      </main>
      <footer className='mb-8'>&copy; freeCodeCamp</footer>
      {/* <script src="./scripts/footballCards.js"></script> */}
    </>
  )
}

export default App
