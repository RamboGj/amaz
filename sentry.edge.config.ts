// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { env } from "./app/utils/env";

Sentry.init({
	dsn: "https://c15128252caa24a9e289aa5ce2151e55@o4509327147728896.ingest.us.sentry.io/4509327152447488",

	// Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
	tracesSampleRate: 1,

	environment: env.NODE_ENV,
	enabled: env.NODE_ENV !== "local",
	// Setting this option to true will print useful information to the console while you're setting up Sentry.
	debug: false,
});
