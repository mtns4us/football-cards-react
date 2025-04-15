import React from 'react'; // Good practice to import React, though not strictly needed in newer versions with the new JSX transform

// Define the PlayerCard component
// It receives a 'player' object as a prop
function PlayerCard({ player }) {
  // Destructure the player object for easier access (optional, but clean)
  const { name, position, number, isCaptain, nickname } = player;

  return (
    <div className="player-card"> {/* No key needed here, it goes on the component usage */}
      <h2>{isCaptain ? "(Captain) " : ""}{name}</h2>
      <p>Position: {position}</p>
      <p>Number: {number}</p>
      <p>Nickname: {nickname !== null ? nickname : "N/A"}</p>
    </div>
  );
}

// Export the component so App.jsx can import it
export default PlayerCard;