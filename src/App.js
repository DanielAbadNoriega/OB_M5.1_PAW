import React, { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const setListItems = () => {
    setItems([...items, newItem]);
    setNewItem("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>** Proyecto PWA - Lista de la compra **</h1>
        <input
          style={{ fontSize: 24, borderRadius: "5px", padding: "10px 20px" }}
          type="text"
          onKeyDown={(e) => e.key === "Enter" && setListItems()}
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          placeholder="Set new item"
        />
        <button
          style={{ fontSize: 24, borderRadius: 5, padding: "10px 20px" }}
          onClick={() => setListItems()}
        >
          Añadir
        </button>

        <h2>Items</h2>
        <ul>
          {items.length ? (
            items.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <p>No hay items</p>
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
