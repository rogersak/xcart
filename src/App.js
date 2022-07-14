import "./App.css";
import Header from "./Container/headerContainer";
import Home from "./Container/homeContainer";
import Footer from "./Container/footerContainer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Container/cartContainer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="App">
                  <Header />
                  <Home />
                  <Footer />
                </div>
              </>
            }
          />

          <Route
            path="/cart"
            element={
              <>
                <Header />
                <Cart />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
