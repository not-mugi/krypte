import { Signale } from "signale";

export const createLogger = (scope: string) =>
  new Signale({
    scope,
    types: {
      info: {
        badge: "⚠️",
        color: "yellow",
        label: "info",
      },
      success: {
        badge: "✅",
        color: "green",
        label: "success",
      },
      error: {
        badge: "🚫",
        color: "red",
        label: "error",
      },
    },
  });
