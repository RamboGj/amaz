import { magic } from "@/app/utils/magic";

export default async function DashboardWalletPage() {
	const user = await magic?.user.getIdToken();
	console.log("user -=>", user);

	return <div />;
}
