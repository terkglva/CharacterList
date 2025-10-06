import React from "react";
import "../styles/CharacterCard.css";

export default function CharacterCard({ character }) {
  return (
    <li className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </li>
  );
}
