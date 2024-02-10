import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Main from "./router/Main";
import { RecoilRoot } from "recoil";
import { Suspense, lazy } from "react";
import Loading from "./common/Loading";

const Contents = lazy(() => import("./router/Contents"));

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RecoilRoot>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:first" element={<Contents />}></Route>
            <Route path="/:first/:second" element={<Contents />}></Route>
            <Route path="/:first/:second/:third" element={<Contents />}></Route>
            <Route
              path="/:first/:second/:third/:fourth"
              element={<Contents />}
            ></Route>
          </Routes>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
