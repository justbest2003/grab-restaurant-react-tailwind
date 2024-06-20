import Header from "./Components/Header";
import Search from "./Components/Search";
import Card from "./Components/Card";
import "./App.css";

function App() {
  return (
    <>
      <div className="container flex flex-col items-center mx-auto space-y-6">
        <Header />
        <Search />
        <Card />
      </div>
    </>
  );
}

export default App;
