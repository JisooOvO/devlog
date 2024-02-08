import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Main from "./router/Main";
import Footer from "./common/Footer";
import { RecoilRoot } from "recoil";
import { Suspense, lazy } from "react";
import Loading from "./common/Loading";

const Language = lazy(() => import("./router/Language"));
const Stack = lazy(() => import("./router/Stack"));
const Project = lazy(() => import("./router/Project"));

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RecoilRoot>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/language" element={<Language />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/Project" element={<Project />} />
          </Routes>
        </Suspense>
        <Footer />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
