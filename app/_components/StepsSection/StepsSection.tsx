"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

/* 1. Sign Up and Authenticate
Description:
Create your account quickly and securely. Choose to import your existing wallet or create a custodial wallet managed by our platform — no crypto experience needed.

2. Pay Easily via PIX
Description:
Once you're registered, simply use your PIX key to complete your token purchase instantly. Enjoy a seamless, fast, and secure payment process designed for Brazil.

3. Claim Your Tokens
Description:
After your payment is confirmed, your tokens are ready! You can claim them directly to your personal blockchain wallet or keep them safely in your custodial balance until you're ready. */
export function StepsSection() {
	const observerRef = useRef<HTMLDivElement>(null);
	const [progress, setProgress] = useState(0);

	const steps = [
		{
			headline: "Step 1",
			title: "Sign Up and Authenticate",
			description:
				"Create your account quickly and securely. Choose to import your existing wallet or create a custodial wallet managed by our platform — no crypto experience needed.",
			imageHref: "/signup.png",
		},
		{
			headline: "Step 2",
			title: "Pay Easily via PIX",
			description:
				"Once you're registered, simply use your PIX key to complete your token purchase instantly. Enjoy a seamless, fast, and secure payment process designed for Brazil.",
			imageHref: "/pix.png",
		},
		{
			headline: "Step 3",
			title: "Claim Your Tokens",
			description:
				"After your payment is confirmed, your tokens are ready! You can claim them directly to your personal blockchain wallet or keep them safely in your custodial balance until you're ready",
			imageHref: "/claim.png",
		},
	];

	useEffect(() => {
		const handleScroll = () => {
			if (!observerRef.current) return;

			const section = observerRef.current;
			const rect = section.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			const start = windowHeight;
			const end = -rect.height;

			const totalScroll = start - end;

			const currentScroll = start - rect.top;

			const progress = Math.min(Math.max(currentScroll / totalScroll, 0), 1);

			setProgress(progress);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section
			className="block max-w-[1120px] mx-auto py-20 lg:py-[200px] px-6 xl:px-0"
			id="HowItWorks"
		>
			<h2 className="text-[3rem] lg:text-[5rem] text-center leading-[120%] font-ClashDisplayMedium text-white">
				How to Buy Your AMA Tokens
			</h2>

			<div
				ref={observerRef}
				className="flex flex-col relative gap-y-32 lg:gap-y-[400px] mt-20"
			>
				<div className="w-3  hidden lg:block  bg-white/10 absolute top-12 bottom-12 left-1/2 -translate-x-1/2">
					<div
						style={{
							transform: `scaleY(${progress})`,
							transformOrigin: "top",
						}}
						className="absolute h-full origin-top w-3 z-20 bg-brandGradient  transition-transform duration-300 ease-out"
					/>
				</div>

				{steps.map(({ headline, imageHref, title, description }, index) => {
					return (
						<div
							data-pair={index % 2 === 0}
							key={headline}
							className="group-step flex items-center justify-between data-[pair=true]:flex-row-reverse"
						>
							<div className="max-w-[480px] flex flex-col gap-y-2">
								<motion.span
									initial={{ opacity: 0, y: 200 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
									}}
									viewport={{ once: true, amount: "some" }}
									className="uppercase font-GeneralSansBold text-white/50 text-[1.25rem]"
								>
									{headline}
								</motion.span>
								<motion.h3
									initial={{ opacity: 0, y: 200 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
									}}
									viewport={{ once: true, amount: "some" }}
									className="text-[3rem] leading-[120%] font-ClashDisplayMedium text-green400"
								>
									{title}
								</motion.h3>
								<motion.p
									initial={{ opacity: 0, y: 200 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
									}}
									viewport={{ once: true, amount: "some" }}
									className="block mt-4 text-[1.125rem] leading-[160%] font-GeneralSansRegular text-white"
								>
									{description}
								</motion.p>
							</div>

							<Image
								loading="lazy"
								className="hidden lg:block w-[320px] h-[320px] xl:w-[500px] xl:h-[500px] rounded-[24px] outline-2 outline-offset-[-2px] outline-white/20"
								width={500}
								height={500}
								src={imageHref}
								alt="Laptop with 3d icons floating around it"
							/>
						</div>
					);
				})}
			</div>
		</section>
	);
}
