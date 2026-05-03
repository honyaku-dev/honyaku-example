import * as Sentry from "@sentry/nextjs";
Sentry.init({
  dsn: "https://Z8AL5rn6oYZsKsrfAbxsdAq9@s2319600.us-east-9.betterstackdata.com/2411789",
  sendDefaultPii: true,
  tracesSampleRate: 1,
  enableLogs: true,
});
