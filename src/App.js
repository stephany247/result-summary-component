import Attribution from "./components/Attribution";
import SummaryList from "./components/SummaryList";
import ResultCard from './components/ResultCard';
import "./App.css";

function App() {
  return (
    <>
      <main className="App">
        <section className="container">
          <ResultCard />
          <SummaryList />
        </section>
      </main>
      <footer>
        <Attribution />
      </footer>
    </>
  );

}

export default App;
