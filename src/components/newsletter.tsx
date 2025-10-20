import { useActionState, useEffect, useState } from "react";

import { action } from "@/action";

function Newsletter() {
  const [state, formAction, isPending] = useActionState(action, undefined);
  const [domain, setDomain] = useState("");

  useEffect(() => {
    // safe to use window here
    setDomain(window.location.href);
  }, []);

  return (
    <div className="space-y-3 py-4 lg:pt-5 lg:pb-4">
      <form className="flex flex-col gap-2 lg:flex-row" action={formAction}>
        <input
          name="nickname"
          id="nickname"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <input
          name="domain"
          id="domain"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          value={domain}
          readOnly
        />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Podaj adres e-mail"
          className="placeholder:text-muted-foreground selection:bg-primary border-surface focus-visible:border-primary focus-visible:ring-primary/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive w-full rounded-full border bg-transparent px-4 py-3 text-sm shadow-sm transition-colors outline-none focus-visible:ring-2 md:text-base lg:px-5"
        />
        <button
          type="submit"
          disabled={isPending}
          aria-label="Wyślij adres e-mail, aby otrzymać powiadomienie o ponownym uruchomieniu strony"
          className="focus-visible:border-primary focus-visible:ring-primary/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive bg-primary hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center rounded-full px-4 py-3 font-medium whitespace-nowrap text-white shadow-sm transition-all outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 lg:px-5 lg:text-lg"
        >
          {isPending ? "Wysyłanie..." : " Powiadom mnie"}
        </button>
      </form>

      {state?.errors?.email && (
        <p className="text-destructive text-center text-sm">
          {state.errors.email[0]}
        </p>
      )}
      {state?.message && (
        <p
          className={`text-center text-sm ${
            state.success ? "text-accent" : "text-destructive"
          }`}
        >
          {state.message}
        </p>
      )}
    </div>
  );
}

export default Newsletter;
