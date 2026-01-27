import Login from "./pages/Login";
import Register from "./pages/Register";

import Sign from "./components/Sign";

import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Sign />
    </>
  );
}

export default App;
