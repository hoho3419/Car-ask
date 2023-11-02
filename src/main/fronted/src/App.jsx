import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mail from "./store";
import Privacy from "./components/UI/privacy";

function App() {
  return (
    <Mail>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
      </Routes>
    </Mail>
  );
}

export default App;
