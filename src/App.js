import "./App.css";
import Counter from "./Counter";
import History from "./History";
function App() {
  const breaks = null;
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => breaks.the.world}>Break the world</button>
        <Counter></Counter>
      </header>
      <History></History>
    </div>
  );
}

export default App;
