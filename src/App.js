import './App.css';
import Header from "./layouts/Header/Header"
import Chart from "./layouts/Chart/Chart"
import Maps from "./layouts/Maps/Maps"


function App() {
  return (
    <main id="app-container">
      <Header />
      <div id='content-container'>
        <Chart />
        <Maps />
      </div>
    </main>
  );
}

export default App;
