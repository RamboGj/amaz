import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	// metadataBase: new URL("https://www.beadev.com.br"),
	title: "Amaz | ERC20 Token",
	description:
		"Stay ahead with BeaDev — your go-to hub for technology news, development tips, and innovation insights.",
	openGraph: {
		type: "website",
		// url: "https://www.beadev.com.br",
		siteName: "Amaz",
		title: "Amaz | ERC20 Token",
		description:
			"Stay ahead with BeaDev — your go-to hub for technology news, development tips, and innovation insights.",
		images: [
			{
				url: "/og.png",
				width: 1200,
				height: 630,
				alt: "Amaz ERC20 Token",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Amaz | ERC20 Token",
		description:
			"Stay ahead with BeaDev — your go-to hub for technology news, development tips, and innovation insights.",
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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
