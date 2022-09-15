import logo from './logo.svg';
import './App.css';
import Rechart from "./CustomizedDotLineChart";

function App() {
  return (
    <div style={{ width: 600, height: 400 }}>
      <h1>
        <center>Show CO2 Concentration</center>
      </h1>
      <Rechart />
    </div> 
  );
}

export default App;
