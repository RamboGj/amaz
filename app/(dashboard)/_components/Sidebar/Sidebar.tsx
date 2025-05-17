"use client";

import { LayoutDashboard, Wallet } from "lucide-react";
import { usePathname } from "next/navigation";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { magic } from "@/app/utils/magic";

export function AppSidebar() {
	const pathname = usePathname();

	const menuItems = [
		{
			title: "Overview",
			icon: LayoutDashboard,
			href: "/dashboard",
			action: () => {},
		},
		{
			title: "Wallet",
			icon: Wallet,
			href: "/wallet",
			action: () => {
				magic?.wallet.showUI();
			},
		},
	];

	return (
		<SidebarProvider className=" hidden lg:block">
			<Sidebar className="border-r border-[#2a2a2a] bg-transparent backdrop-blur-3xl">
				<SidebarHeader className="border-b border-[#2a2a2a] py-4">
					<div className="flex items-center px-4">
						<Image width={48} height={48} src="/logo.svg" alt="AMA Logo" />
						<div className="ml-auto md:hidden">
							<SidebarTrigger />
						</div>
					</div>
				</SidebarHeader>
				<SidebarContent className="p-2">
					<SidebarMenu>
						{menuItems.map((item) => {
							const isActive = pathname === item.href;
							return (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										asChild
										isActive={isActive}
										className={
											isActive
												? " text-zinc-900  hover:text-[#67d269] hover:cursor-pointer"
												: "text-zinc-200 hover:bg-zinc-800 bg-transparent hover:cursor-pointer"
										}
									>
										<button
											onClick={item.action}
											type="button"
											className="flex items-center gap-2"
										>
											<item.icon className={isActive ? "text-[#67d269]" : ""} />
											<span className={isActive ? "text-zinc-300" : ""}>
												{item.title}
											</span>
										</button>
										{/* <Link href={item.href} className="flex items-center gap-2">
											<item.icon className={isActive ? "text-[#67d269]" : ""} />
											<span className={isActive ? "text-zinc-300" : ""}>
												{item.title}
											</span>
										</Link> */}
									</SidebarMenuButton>
								</SidebarMenuItem>
							);
						})}
					</SidebarMenu>
				</SidebarContent>
				<SidebarFooter className="border-t border-[#2a2a2a] p-4">
					<div className="text-xs text-muted-foreground">
						© 2025 ERC20 ICO Dashboard
					</div>
				</SidebarFooter>
			</Sidebar>
		</SidebarProvider>
	);
}
