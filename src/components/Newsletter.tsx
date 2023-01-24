import { useForm } from "react-hook-form";
import { z } from "zod";
import "./Newsletter.css";

const schema = z.object({
  email: z.string().email(),
});

export const Newsletter = () => {
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitSuccessful, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const submitHandler = handleSubmit(async ({ email }) => {
    const body = new FormData();
    body.append("email", email);
    body.append("domain", window.location.href);

    await fetch(
      "https://script.google.com/macros/s/AKfycby8JNA7_aHm3ZgvmNQtDfae-DZX8D-Oa2C0ENeXojBP8jpVZ1ewMOPJBaUVnWkU56NY/exec",
      {
        method: "POST",
        body,
      }
    );

    reset();
  });

  const email = watch("email");

  return (
    <section className="newsletter-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h5 className="has-line">Strona w przygotowaniu</h5>
            <h1>Powiadomimy Cię, kiedy będzie gotowa</h1>
            <form method="POST" onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Podaj adres e-mail"
                />
                <button
                  type="submit"
                  className={
                    isSubmitSuccessful && !email ? "successfully-submitted" : ""
                  }
                >
                  {!email && isSubmitSuccessful && <>Sukces</>}
                  {isSubmitting && <>Ładowanie...</>}
                  {!isSubmitting && email && <>Otrzymaj powiadomienie</>}
                  {!isSubmitting && !email && !isSubmitSuccessful && (
                    <>Otrzymaj powiadomienie</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
