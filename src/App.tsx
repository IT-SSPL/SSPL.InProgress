import "./vendor/bootstrap.min.css";
import "./main.css";
import { Helmet } from "react-helmet";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { MobileImage } from "./components/MobileImage";

function App() {
  return (
    <section className="main">
      <Helmet>
        <script
          defer
          data-domain={import.meta.env.DOMAIN}
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
