import "./App.css";
import GetData from "./components/Getdata";
import Showdata from "./components/Showdata";

function App() {
  return (
    <div className="bg">
      <h1>Mars Rover Photos</h1>
      <>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </>
      <GetData />
      <Showdata />
    </div>
  );
}

export default App;
