import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	// metadataBase: new URL("https://www.Amaz.com.br"),
	title: "AMA TOKEN | Blockchain for a Sustainable Future",
	description:
		"Discover how blockchain technology is driving the preservation of the Amazon Rainforest and empowering communities for a sustainable future. Join the movement for real impact!",
	openGraph: {
		type: "website",
		// url: "https://www.Amaz.com.br",
		siteName: "AMA",
		title: "AMA TOKEN | Blockchain for a Sustainable Future",
		description:
			"Discover how blockchain technology is driving the preservation of the Amazon Rainforest and empowering communities for a sustainable future. Join the movement for real impact!",
		images: [
			{
				url: "/og.png",
				width: 1200,
				height: 630,
				alt: "AMA TOKEN | Blockchain for a Sustainable Future",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "AMA TOKEN | Blockchain for a Sustainable Future",
		description:
			"Discover how blockchain technology is driving the preservation of the Amazon Rainforest and empowering communities for a sustainable future. Join the movement for real impact!",
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
