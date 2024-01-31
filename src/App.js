import ClassesRoute from "./ClassesRoute"
import {BrowserRouter} from "react-router-dom"
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="total-bg">
      <div className="card-bg">
        <ClassesRoute />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
