import { AppSidebar } from "./_components/Sidebar/Sidebar";

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex">
			<AppSidebar />
			{children}
		</div>
	);
}
