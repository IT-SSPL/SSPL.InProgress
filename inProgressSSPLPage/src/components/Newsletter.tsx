import { useState } from "react";
import "./Newsletter.css";

export const Newsletter = () => {
  const [enteredEmail, setEnteredEmail] = useState("");

  const emailChangeHandler = (event: any) => {
    setEnteredEmail(event.target.value);
  };

  return (
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
                  onChange={emailChangeHandler}
                />
                <button
                  type="submit"
                  onClick={() => console.log(enteredEmail)}
                  // TODO onSubmit={execute google script}
                >
                  Otrzymaj powiadomienie
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
