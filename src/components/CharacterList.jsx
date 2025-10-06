import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import "../styles/CharacterList.css";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  const loadData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setCharacters(data.results);
  };

  return (
    <div className="list-container">
      <h1>Rick and Morty Characters</h1>
      <button onClick={loadData}>Load Characters</button>
      <ul className="character-list">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </ul>
    </div>
  );
}
