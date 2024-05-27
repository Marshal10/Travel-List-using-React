import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleNewItem(item) {
    setItems((i) => [...i, item]);
  }

  function handleCheckboxToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form addNewItem={handleNewItem} />
      <PackingList
        items={items}
        togglePacked={handleCheckboxToggle}
        deleteItem={handleDeleteItem}
      />
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

    const newItem = { description, qty, packed: false, id: Date.now() };
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

function PackingList({ items, togglePacked, deleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            togglePacked={togglePacked}
            deleteItem={deleteItem}
          />
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

function Item({ item, togglePacked, deleteItem }) {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => togglePacked(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.qty} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}

function Statistics() {
  return (
    <footer className="stats">
      <em>You have X items on your list,and you have already packed X (X%)</em>
    </footer>
  );
}
