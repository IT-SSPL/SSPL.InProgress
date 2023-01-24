import { useState } from "react";
import "./Newsletter.css";

export const Newsletter = () => {
  const [enteredEmail, setEnteredEmail] = useState("");

  const emailChangeHandler = (event: any) => {
    setEnteredEmail(event.target.value);
  };

  const submitHandler = (event: any) => {
    const formElement = document.querySelector("form");
    event.preventDefault();
    const data = new FormData(formElement!);
    fetch(
      "https://script.google.com/macros/s/AKfycbwYkdSG-LJq-T6uL66ymK6dB1G27Pljx08lRvnEsh6cSp6oUmjdqJHVg4aYuflIHg2_/exec",
      {
        method: "POST",
        body: data,
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="newsletter-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h5 className="has-line">Strona w przygotowaniu</h5>
            <h1>Powiadomimy Cię, kiedy będzie gotowa</h1>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={enteredEmail}
                  placeholder="Podaj adres e-mail"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  onChange={emailChangeHandler}
                />
                <button type="submit">Otrzymaj powiadomienie</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
