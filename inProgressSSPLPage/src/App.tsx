import "./vendor/bootstrap.min.css";
import "./main.css";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";

function App() {
  return (
    <section className="main">
      <Navbar />
      <Newsletter />

      <section className="xs-bg d-md-none d-lg-none">
        <img src="./src/assets/xs.jpg" alt="img" className="img-fluid w-100" />
      </section>
    </section>
  );
}

export default App;
