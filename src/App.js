import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navBar/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
