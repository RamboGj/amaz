"use client";

import { Magic } from "magic-sdk";
import { env } from "./env";

const customNodeOptions = {
	rpcUrl: env.NEXT_PUBLIC_RPC_URL,
	chainId: Number(env.NEXT_PUBLIC_CHAIN_ID),
};

export const magic =
	typeof window !== "undefined"
		? new Magic(env.NEXT_PUBLIC_MAGIC_API_KEY, {
				network: customNodeOptions,
			})
		: null;
