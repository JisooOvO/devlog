import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Main from "./router/Main";
import Footer from "./common/Footer";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
