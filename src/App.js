import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import List from "./components/List";
import Create from "./components/Create";
import Edit from "./components/Edit";
// import CrudApp from "./components/CrudApp";

function App() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
            <Link className="nav-item nav-link active" to={"/"}>
              Inicio
            </Link>
          </div>
        </nav>
        <div className="container">
          <br />
          <Routes>
            <Route exact path="/" element={<List />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:Id" element={<Edit />} />
          </Routes>
        </div>
      </Router>
      {/* <CrudApp /> */}
    </>
  );
}

export default App;
