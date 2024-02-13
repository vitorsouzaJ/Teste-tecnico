import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import { Header } from "./components/header";
import "./reset.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
