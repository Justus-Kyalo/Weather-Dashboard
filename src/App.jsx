import "./App.css";
import Home from "./components/Home/Home";
import useAxiosFetch from "./hooks/useAxiosFetch";

function App() {
  const { data, fetchError, isLoading, forecast } = useAxiosFetch("london");
  // console.log(data);
  return !isLoading && !fetchError ? (
    <div className="App">
      <Home data={data} forecast={forecast} />
    </div>
  ) : null;
}

export default App;
