import { z } from "zod";

const envSchema = z.object({
	NEXT_PUBLIC_RPC_URL: z.string().url(),
	NEXT_PUBLIC_MAGIC_API_KEY: z.string().min(1),
	NEXT_PUBLIC_CHAIN_ID: z.string().min(1),
	NODE_ENV: z
		.enum(["local", "development", "production"])
		.default("development"),
	NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1),
	NEXT_PUBLIC_POSTHOG_HOST: z.string().min(1),
});

export const env = envSchema.parse({
	NEXT_PUBLIC_RPC_URL: process.env.NEXT_PUBLIC_RPC_URL,
	NEXT_PUBLIC_MAGIC_API_KEY: process.env.NEXT_PUBLIC_MAGIC_API_KEY,
	NEXT_PUBLIC_CHAIN_ID: process.env.NEXT_PUBLIC_CHAIN_ID,
	NODE_ENV: process.env.NODE_ENV,
	NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
	NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
});
