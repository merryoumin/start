import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import A from "./pages/a";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/a" element={<A />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
