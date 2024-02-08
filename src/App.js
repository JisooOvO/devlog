import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Main from "./router/Main";
import About from "./router/About";
import Footer from "./common/Footer";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
