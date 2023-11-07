import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mail from "./store";
import Privacy from "./components/UI/privacy";
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./components/UI/AdminLayout";
import EmailList from "./components/admin/EmailList";
import EmailDetail from "./pages/EmailDetail";

function App() {
  return (
    <Mail>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/adm" element={<AdminLogin />}></Route>
        <Route path="/adm" element={<AdminLayout />}>
          <Route path="email" element={<EmailList />} />
          <Route path="email/:id" element={<EmailDetail />} />
        </Route>
      </Routes>
    </Mail>
  );
}

export default App;
