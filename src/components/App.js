import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Statistics from "./Statistics";

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

  function deleteAllItems() {
    const confirm = window.confirm("Are you sure you want to clear all items?");
    if (confirm) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addNewItem={handleNewItem} />
      <PackingList
        items={items}
        togglePacked={handleCheckboxToggle}
        deleteItem={handleDeleteItem}
        handleClearList={deleteAllItems}
      />
      <Statistics items={items} />
    </div>
  );
}
