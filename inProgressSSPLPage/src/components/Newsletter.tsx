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
    const data = new URLSearchParams();
    data.append("email", enteredEmail);

    fetch(
      "https://script.google.com/macros/s/AKfycbxaoYW5UF76L0j_OUoym6nOpwq9j94hpxI9MVl5EZvAjWH0YxNnstlyga2zy3jb4fIe/exec",
      {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
        },
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
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Podaj adres e-mail"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  onChange={emailChangeHandler}
                />
                <button type="submit" onClick={() => console.log(enteredEmail)}>
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
