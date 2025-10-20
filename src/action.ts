type FormState =
  | {
      errors: Partial<Record<"email" | "domain" | "nickname", string[]>>;
      message?: string;
      success?: boolean;
    }
  | { message?: string; errors?: undefined; success?: undefined }
  | { success?: boolean; message?: string; errors?: undefined }
  | undefined;

export async function action(
  _state: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    const data = await res.json();
    return data;
  } catch {
    return {
      success: false,
      message: "Wystąpił błąd. Proszę spróbuj ponownie później.",
    };
  }
}
