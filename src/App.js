const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
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

function Form() {
  return (
    <form>
      <h3>What do you need for your 😍 trip ?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item"></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <li key={item.id}>
            <input type="checkbox"></input>
            <span>
              {item.quantity} {item.description}
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
