import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleNewItem(item) {
    setItems((i) => [...i, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addNewItem={handleNewItem} />
      <PackingList items={items} />
      <Statistics />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <p>🏝️ Far Away 🧳</p>
    </div>
  );
}

function Form({ addNewItem }) {
  const [qty, setQty] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, qty, packed: "false", id: Date.now() };
    addNewItem(newItem);

    setDescription("");
    setQty(1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip ?</h3>
      <select value={qty} onChange={(e) => setQty((q) => (q = e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription((d) => (d = e.target.value))}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input type="checkbox"></input>
            <span>
              {item.qty} {item.description}
            </span>
            <button>❌</button>
          </li>
        ))}
      </ul>
      <div className="actions">
        <select>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button>Clear List</button>
      </div>
    </div>
  );
}

function Statistics() {
  return (
    <footer className="stats">
      <em>You have X items on your list,and you have already packed X (X%)</em>
    </footer>
  );
}
