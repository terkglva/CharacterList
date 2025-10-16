import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import "../styles/CharacterList.css";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setCharacters(data.results);
  };

  const filtered = characters.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleClear = () => setSearch("");

  return (
    <div className="list-container">
      <h1>Rick and Morty Characters</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search characters..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleClear}
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#f44336",
            color: "white",
            cursor: "pointer",
          }}
        >
          Clear
        </button>
      </div>

      <button onClick={loadData}>Load Characters</button>

      <ul className="character-list">
        {filtered.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </ul>
    </div>
  );
}
