import Image from "next/image";
import Link from "next/link";

export function Footer() {
	const links = [
		{
			title: "Company",
			items: [
				{
					href: "#",
					label: "Explore",
				},
				{
					href: "#",
					label: "Token",
				},
				{
					href: "#",
					label: "Market",
				},
				{
					href: "#",
					label: "Community",
				},
				{
					href: "#",
					label: "About",
				},
			],
		},
		{
			title: "Resource",
			items: [
				{
					href: "#",
					label: "Support",
				},
				{
					href: "#",
					label: "Partners",
				},
				{
					href: "#",
					label: "Platform",
				},
			],
		},
		{
			title: "Legal",
			items: [
				{
					href: "#",
					label: "Privacy Policy",
				},
				{
					href: "#",
					label: "Terms of use",
				},
			],
		},
	];

	return (
		<footer
			className="block px-6 lg:px-0 pb-9 pt-20 lg:pt-[160px] relative overflow-hidden border-t border-white/10 mt-12 lg:mt-[120px]"
			id="footer"
		>
			<div className="max-w-[1120px] mx-auto w-full flex flex-col items-center">
				<div
					aria-hidden
					className="absolute pointer-events-none select-none -bottom-[234px] w-[468px] h-[312px] rotate-[-25deg] blur-[256px] rounded-[468px] bg-[rgba(15,248,136,0.35)] z-0"
				/>

				<div className=" w-full flex-col lg:flex-row flex items-start justify-between z-10">
					<div className="flex flex-col gap-y-8">
						<Image
							src="/logo.svg"
							alt="AMA Token logo"
							width={64}
							height={64}
						/>

						<div>
							<span className="text-white/50 leading-[160%] font-GeneralSansRegular text-[1.125rem]">
								Email Address
							</span>
							<Link
								href={"mailto:contact@ama.token"}
								className="text-white font-GeneralSansRegular text-base block mt-2 hover:text-green500 transition duration-500"
							>
								contact@ama.token
							</Link>
						</div>
					</div>

					<div className="flex flex-col mt-8 lg:mt-0 lg:flex-row items-start gap-8 lg:gap-20">
						{links.map(({ items, title }) => {
							return (
								<div className="flex flex-col gap-y-4" key={title}>
									<strong className="text-white/50 leading-[160%] font-GeneralSansRegular text-[1.125rem]">
										{title}
									</strong>
									<ul className="flex flex-col gap-y-4">
										{items.map(({ href, label }) => {
											return (
												<li key={label}>
													<Link
														className="text-white font-GeneralSansRegular text-base hover:text-white/70 hover:cursor-pointer transition duration-500"
														target="_blank"
														href={href}
													>
														{label}
													</Link>
												</li>
											);
										})}
									</ul>
								</div>
							);
						})}
					</div>
				</div>

				<span className="mx-auto block mt-[124px] text-white/50 font-GeneralSansRegular text-base">
					Copy Right AMA Token 2025, All Rights Reserved
				</span>
			</div>
		</footer>
	);
}
