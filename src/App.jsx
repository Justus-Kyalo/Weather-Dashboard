import "./App.css";
import Home from "./components/Home/Home";
import useAxiosFetch from "./hooks/useAxiosFetch";

function App() {
  const { data, fetchError, isLoading } = useAxiosFetch("london");
  console.log(data);
  return !isLoading && !fetchError ? (
    <div className="App">
      <Home data={data} />
    </div>
  ) : null;
}

export default App;
