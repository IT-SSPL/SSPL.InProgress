import { useState } from "react";
import { X } from "lucide-react";

import { parseMessage } from "@/utils/parse-message";

function Announcement() {
  const [open, setOpen] = useState(true);

  const title = process.env.BUN_PUBLIC_ANNOUNCEMENT_TITLE;
  const message = process.env.BUN_PUBLIC_ANNOUNCEMENT_MESSAGE;

  if (!title && !message) return null;
  if (!open) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="text-foreground absolute inset-x-0 top-3 mx-auto max-w-max rounded-lg border border-orange-100 bg-orange-50 p-3 text-sm md:top-2"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {title && <p className="text-base font-semibold">{title}</p>}
          {message && (
            <p className="text-foreground/80 mt-1 text-sm whitespace-pre-wrap">
              {parseMessage(message)}
            </p>
          )}
        </div>

        <button
          type="button"
          aria-label="Zamknij powiadomienie"
          onClick={() => setOpen(false)}
          className="text-foreground/50 hover:text-foreground cursor-pointer rounded p-1 transition-colors duration-200 hover:bg-orange-100"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}

export default Announcement;
