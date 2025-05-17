import { Toaster } from "react-hot-toast";
import { AppSidebar } from "./_components/Sidebar/Sidebar";

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex bg-[url('/Elements.png')] bg-cover bg-center">
			<AppSidebar />
			{children}
			<Toaster position="top-right" />
		</div>
	);
}
