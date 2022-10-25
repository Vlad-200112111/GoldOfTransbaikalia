import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/General/Header/Header";
import Footer from "./Components/General/Footer/Footer";
import AppRoutes from "./Routes/Routes/AppRoutes";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
