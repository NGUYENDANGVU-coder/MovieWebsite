import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scroll/ScrollUp";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route key={index} path={route.path} element={<Page />}></Route>
            );
          })}
        </Routes>
        <Footer />
        <ScrollUp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
