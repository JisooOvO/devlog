import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Main from "./router/Main";
import Footer from "./common/Footer";
import { RecoilRoot } from "recoil";
import { Suspense, lazy } from "react";
import Loading from "./common/Loading";
import SideBar from "./common/SideBar";

const Language = lazy(() => import("./router/Language"));
const Stack = lazy(() => import("./router/Stack"));
const Project = lazy(() => import("./router/Project"));

const Javascript = lazy(() => import("./router/Javascript"));

function App() {
  return (
    <HashRouter>
      <RecoilRoot>
        <Header />
        <SideBar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/language" element={<Language />} />
            <Route path="/language/javascript" element={<Javascript />}></Route>
            <Route path="/stack" element={<Stack />} />
            <Route path="/Project" element={<Project />} />
          </Routes>
        </Suspense>
        <Footer />
      </RecoilRoot>
    </HashRouter>
  );
}

export default App;
