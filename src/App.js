import "./App.css";
import Activities from "./components/Activities/Activities";
import Questions from "./components/Questions/Questions";

function App() {
  return (
    <div className="App">
      <h1>Workout Club</h1>
      <Activities></Activities>
      <Questions></Questions>
    </div>
  );
}

export default App;
