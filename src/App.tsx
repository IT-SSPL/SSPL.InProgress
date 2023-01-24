import "./vendor/bootstrap.min.css";
import "./main.css";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { MobileImage } from "./components/MobileImage";

function App() {
  return (
    <section className="main">
      <Navbar />
      <Newsletter />
      <MobileImage />
    </section>
  );
}

export default App;
