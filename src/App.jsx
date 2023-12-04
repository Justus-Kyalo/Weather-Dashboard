import "./App.css";
import Home from "./components/Home/Home";
import UseAxiosFetch from "./hooks/UseAxiosFetch";

function App() {
  const { data, fetchError } = UseAxiosFetch("london");
  console.log(data);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
