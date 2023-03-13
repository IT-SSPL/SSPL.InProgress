import "./vendor/bootstrap.min.css";
import "./main.css";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { MobileImage } from "./components/MobileImage";
import { Helmet } from "react-helmet";

function App() {
  const location = window.location.hostname;

  return (
    <section className="main">
      <Helmet>
        <script
          defer
          data-domain={location}
          src="https://plausible.samorzad.p.lodz.pl/js/script.js"
        ></script>
      </Helmet>
      <Navbar />
      <Newsletter />
      <MobileImage />
    </section>
  );
}

export default App;
