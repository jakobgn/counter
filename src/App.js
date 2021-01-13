import "./App.css";
import Counter from "./Counter";
import History from "./History";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>       
      </header>
      <History></History>
    </div>
  );
}

export default App;
