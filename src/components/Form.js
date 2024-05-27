import { useState } from "react";

export default function Form({ addNewItem }) {
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
