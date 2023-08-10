import Header from "./components/Header";
import Footer from "./components/Footer";
import PractionersList from "./app/shared/PractionersList";
import { PRACTIONERS } from "./app/shared/PRACTIONERS";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <PractionersList practioners={PRACTIONERS[0]} />
      <Footer />
    </div>
  );
}

export default App;
