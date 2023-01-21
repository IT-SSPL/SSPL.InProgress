import { useState } from "react";
import { Navbar } from "./components/Navbar";
import "./main.css";
import "./vendor/bootstrap.min.css";

function App() {
  const [enteredEmail, setEnteredEmail] = useState("");

  const emailChangeHandler = (event: any) => {
    setEnteredEmail(event.target.value);
  };

  return (
    <section className="main">
      <Navbar />
      <section className="newsletter-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h5 className="has-line">Strona w przygotowaniu</h5>
              <h1>Powiadomimy Cię, kiedy będzie gotowa</h1>
              <form action="#">
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Podaj adres e-mail"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  />
                  <button
                    type="submit"
                    onChange={emailChangeHandler}
                    onClick={() => console.log(enteredEmail)}
                  >
                    Otrzymaj powiadomienie
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* News Letter Ends Here */}

      {/* Only Mobile View Starts Here */}
      <section className="xs-bg d-md-none d-lg-none">
        <img src="./src/assets/xs.jpg" alt="img" className="img-fluid w-100" />
      </section>
      {/* Only Mobile View Ends Here */}
    </section>
  );
}

export default App;
