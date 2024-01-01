import "./App.css";
import Home from "./components/Home/Home";
// import useAxiosFetch from "./hooks/useAxiosFetch";

function App() {
  // const { data, fetchError, isLoading, forecast } = useAxiosFetch("london");
  // console.log(data);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
