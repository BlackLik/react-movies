import "./App.css";
import Book from "./Book";

function App() {
  return (
    <div className="App">
      <header className="App-header">Первый проект на React</header>
      <main>
        <Book title="React" author="Stive" year="2019" />
        <Book title="Vue" author="Stive" year="2020" />
        <Book title="CSS" author="Stive" year="2018" />
      </main>
    </div>
  );
}

export default App;
