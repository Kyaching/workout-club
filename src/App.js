import "./App.css";
import Activities from "./components/Activities/Activities";
import Header from "./components/Header/Header";
import Questions from "./components/Questions/Questions";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Activities></Activities>
      <Questions></Questions>
      <footer>
        <p>Copyright @2022</p>
      </footer>
    </div>
  );
}

export default App;
