import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {};

export default withSentryConfig(withNextIntl(nextConfig), {
  org: "518935",
  project: "2411789",
  sentryUrl: "https://us-east-9-sourcemaps.betterstackdata.com/",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  tunnelRoute: "/sentry-tunnel",
  silent: !process.env.CI,
});
