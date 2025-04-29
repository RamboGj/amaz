"use client";

import Image from "next/image";
import Link from "next/link";
import { Countdown } from "./_components/Countdown/Countdown";
import { StepsSection } from "./_components/StepsSection/StepsSection";
import { Footer } from "./_components/Footer/Footer";

export default function HomePage() {
	const navLinks = [
		{
			label: "Explore",
			href: "#",
		},
		{
			label: "Market",
			href: "#",
		},

		{
			label: "Community",
			href: "#",
		},
		{
			label: "About",
			href: "#",
		},
	];

	return (
		<div className="bg-[#131313]">
			<section
				id="hero"
				className="bg-[url('/Elements.png')] bg-cover bg-center pb-[200px]"
			>
				<header className="container mx-auto">
					<nav className="flex items-center justify-between">
						<Link href="/" className="flex items-center gap-x-4">
							<Image width={64} height={64} src="/logo.svg" alt="AMA Logo" />
							<strong className="font-ClashDisplayMedium text-white text-3xl">
								AMA
							</strong>
						</Link>

						<ul className="flex items-center gap-x-8">
							{navLinks.map(({ href, label }) => {
								return (
									<li key={label}>
										<Link href={href}>
											<span className="text-[1rem] font-GeneralSansMedium text-white hover:opacity-70 transtion-300 duration-500">
												{label}
											</span>
										</Link>
									</li>
								);
							})}
						</ul>

						<div className="flex items-center gap-x-6">
							<button
								type="button"
								className="text-base font-GeneralSansMedium text-white hover:cursor-pointer"
							>
								Buy
							</button>
							<Link href={"/login"}>
								<button
									type="button"
									className="h-[100px] flex items-center px-8 text-[#131313] font-GeneralSansMedium text-base 
                    bg-brandGradient transition-all duration-500 hover:cursor-pointer"
								>
									<span>Log In</span>
								</button>
							</Link>
						</div>
					</nav>
				</header>

				<div className="flex items-end mt-[90px] container mx-auto justify-between gap-x-24">
					<div className="max-w-[787px]">
						<h1 className="text-[6rem] leading-[120%] font-ClashDisplayMedium text-white">
							Blockchain for a Sustainable Future
						</h1>
						<p className="max-w-[550px] block mt-4 text-[1.125rem] leading-[160%] font-GeneralSansRegular text-white">
							Discover how blockchain technology is driving the preservation of
							the Amazon Rainforest and empowering communities for a sustainable
							future. Join the movement for real impact.
						</p>

						<Countdown releaseDate={new Date("04-30-2025").toISOString()} />
					</div>

					<video
						className="hidden md:block max-w-[1000px] w-full h-[1000px] bg-transparent absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
						muted
						autoPlay
						playsInline
						loop
					>
						<source src="/sample.webm" />
					</video>
				</div>
			</section>

			<section className="py-[200px] relative overflow-hidden" id="second">
				<div className="absolute right-0 bottom-0 w-[468px] h-[312px] rotate-[-25deg] blur-[256px] rounded-[468px] bg-[rgba(15,248,136,0.35)] z-0" />
				<div className="absolute left-0 top-0 w-[468px] h-[312px] rotate-[-25deg] blur-[256px] rounded-[468px] bg-[rgba(15,248,136,0.35)] z-0" />
				<div className="max-w-[1120px] mx-auto">
					<h2 className="text-[5rem] leading-[120%] font-ClashDisplayMedium text-white">
						Secure Your Tokens Early and Save
					</h2>
					<p className="max-w-[550px] block mt-4 text-[1.125rem] leading-[160%] font-GeneralSansRegular text-white">
						Check out each ICO phase and lock in the best prices:
					</p>

					<ul className="w-full flex flex-col mt-12 z-20">
						<li className="bg-[rgba(14,62,52,0.2)] w-full px-6 rounded-[12px] h-[104px] flex justify-between items-center gap-x-6">
							<strong className="text-[#FAFF00] font-ClashDisplayMedium text-[1.5rem]">
								1. Seed :
							</strong>
							<span className="text-[1.25rem] text-white font-GeneralSansMedium">
								R$X.XX / Token{" "}
							</span>
							<span className="text-[1.25rem] text-white font-GeneralSansMedium">
								Hard Cap: R$XXX,XXX
							</span>
						</li>
						<li className="-full px-6 rounded-[12px] h-[104px] flex justify-between items-center gap-x-6">
							<strong className="text-[#FAFF00] font-ClashDisplayMedium text-[1.5rem]">
								2. Private :
							</strong>
							<span className="text-[1.25rem] text-white font-GeneralSansMedium">
								R$X.XX / Token{" "}
							</span>
							<span className="text-[1.25rem] text-white font-GeneralSansMedium">
								Hard Cap: R$XXX,XXX
							</span>
						</li>
						<li className="bg-[rgba(14,62,52,0.2)] w-full px-6 rounded-[12px] h-[104px] flex justify-between items-center gap-x-6">
							<strong className="text-[#FAFF00] font-ClashDisplayMedium text-[1.5rem]">
								3. Public :
							</strong>
							<span className="text-[1.25rem] text-white font-GeneralSansMedium">
								R$X.XX / Token{" "}
							</span>
							<span className="text-[1.25rem] text-white font-GeneralSansMedium">
								Hard Cap: R$XXX,XXX
							</span>
						</li>
					</ul>
				</div>
			</section>

			<StepsSection />

			<Footer />
		</div>
	);
}
