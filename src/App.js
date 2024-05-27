export default function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
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
