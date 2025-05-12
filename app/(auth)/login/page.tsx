import type { Metadata } from "next";
import { LoginForm } from "./_components/LoginForm/LoginForm";

// async function handleLogin(formData: FormData) {
// 	"use server";
// 	console.log("formData ->", formData);
// }

export const metadata: Metadata = {
	// metadataBase: new URL("https://www.Amaz.com.br"),
	title: "Login | Preserve the Amazon, Transform Lives",
	description:
		"Access your account to support AMA conservation efforts through blockchain innovation. Every action you take helps create a sustainable future.",
	openGraph: {
		type: "website",
		// url: "https://www.Amaz.com.br",
		siteName: "AMA",
		title: "Login | Preserve the Amazon, Transform Lives",
		description:
			"Access your account to support AMA conservation efforts through blockchain innovation. Every action you take helps create a sustainable future.",
		images: [
			{
				url: "/og.png",
				width: 1200,
				height: 630,
				alt: "Login | Preserve the Amazon, Transform Lives",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Login | Preserve the Amazon, Transform Lives",
		description:
			"Access your account to support AMA conservation efforts through blockchain innovation. Every action you take helps create a sustainable future.",
		images: ["/og.png"],
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
	},
	keywords: [
		"amazonia",
		"forest",
		"token",
		"crypto",
		"airdrop",
		"nature",
		"erc20",
	],
};

export default function LoginPage() {
	return <LoginForm />;
}
