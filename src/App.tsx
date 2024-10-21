import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Achievements from "./pages/achievements";
import Documents from "./pages/Documents";
import Employment from "./pages/Employment";
import MobileNav from "./components/MobileNav";

const Root = () => {
  return (
    <>
      <main className="page-container">
        <div className="wrapper">
          <div className="page-header-container">
            <div className="page-header">
              <h1>Christian Rudder</h1>
              <p>My Online Resume</p>
            </div>
          </div>
          <div className="content-container">
            <Nav />
            <div className="page-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/education" element={<Education />} />
                <Route path="/employment" element={<Employment />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/documents" element={<Documents />} />
              </Routes>
            </div>
          </div>
        </div>
        <MobileNav />
      </main>
    </>
  );
};

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
