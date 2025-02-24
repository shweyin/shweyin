import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import Nav from "./Components/Nav";
import RoutesWrapper from "./Components/RoutesWrapper";
import HttpsRedirect from "react-https-redirect";

function App() {
  return (
    <HttpsRedirect>
      <div className="flex flex-col md:flex-row min-h-screen overflow-hidden text-white">
        <BrowserRouter>
          <Nav />
          <div className="stars1"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
          <RoutesWrapper />
        </BrowserRouter>
      </div>
    </HttpsRedirect>
  );
}

export default App;
