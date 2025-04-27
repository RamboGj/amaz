import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

async function handleLogin(formData:FormData) {
    "use server"
    console.log("formData ->", formData)
}

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

export default async function LoginPage() {
    return (
        <div className="h-screen flex flex-col justify-center items-center w-full bg-[#131313] bg-[url('/Elements.png')] bg-no-repeat bg-cover px-6 lg:px-0">
            <Image src={"/logo.svg"} alt="AMA Logo" width={64} height={64} />
            <h1 className="font-ClashDisplayBold text-white text-[3rem] block mt-8">Log in</h1>

            <form className="max-w-[720px] mx-auto flex flex-col mt-12 w-full gap-y-6" action={handleLogin}>

                <fieldset className="flex flex-col gap-y-2">
                    <label className="font-GeneralSansMedium text-white text-[1.25rem]" htmlFor="email">E-mail</label>
                    <div className="px-4 h-[56px] text-white font-GeneralSansMedium rounded-[8px] bg-white/10 ring-1 ring-white/30 focus-within:ring-2 focus-within:ring-green400 transition duration-500 placeholder:text-[#838383]">
                        <input className="flex flex-1 h-full w-full focus:outline-none" placeholder="Input your-email..." type="email" name="email" id="email" />
                    </div>
                </fieldset>
                <fieldset className="flex flex-col gap-y-2">
                    <label className="font-GeneralSansMedium text-white text-[1.25rem]"  htmlFor="password">Password</label>
                    <div className="px-4 h-[56px] text-white font-GeneralSansMedium rounded-[8px] bg-white/10 ring-1 ring-white/30 focus-within:ring-2 focus-within:ring-green400 transition duration-500 placeholder:text-[#838383]">
                        <input className="flex flex-1 h-full w-full focus:outline-none" placeholder="Input your password..." type="password" name="password" id="password" />
                    </div>
                </fieldset>

                <p className="font-GeneralSansRegular cursor-default text-[#838383]">{"Don't"} have an account? <Link className="font-GeneralSansMedium text-green500 hover:text-green400 transition-colors duration-500" href={"/sign-up"}>Sign up</Link></p>

                <button className="h-[56px] block mt-8 bg-green500 rounded-[12px] outline outline-offset-[-1px] outline-white/20 hover:cursor-pointer hover:bg-green400 transiton duration-500">
                    <span className="font-GeneralSansBold">Login</span>
                </button>
            </form>
        </div>
    )


}