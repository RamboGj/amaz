/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import {
	ArrowLeftRight,
	ChevronDown,
	Copy,
	ExternalLink,
	LogOut,
	RefreshCw,
	Wallet,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import { magic } from "@/app/utils/magic";
import { Skeleton } from "@/components/Skeleton/Skeleton";

// Mock token data - replace with your actual token details
const TOKEN_DETAILS = {
	name: "AMA Token",
	symbol: "AMA",
	decimals: 18,
	contractAddress: "0x1234567890123456789012345678901234567890",
	explorerUrl:
		"https://etherscan.io/token/0x1234567890123456789012345678901234567890",
};

// Mock transaction data - replace with actual API call
const MOCK_TRANSACTIONS = [
	{
		hash: "0xabc...123",
		type: "buy",
		amount: "1000",
		timestamp: new Date(Date.now() - 86400000 * 2).toISOString(),
		from: "0x1234...5678",
		to: "0x8765...4321",
	},
	{
		hash: "0xdef...456",
		type: "buy",
		amount: "500",
		timestamp: new Date(Date.now() - 86400000).toISOString(),
		from: "0x1234...5678",
		to: "0x8765...4321",
	},
	{
		hash: "0xghi...789",
		type: "sell",
		amount: "200",
		timestamp: new Date().toISOString(),
		from: "0x8765...4321",
		to: "0x1234...5678",
	},
];

export default function Dashboard() {
	const [isConnected, setIsConnected] = useState(false);
	const [account, setAccount] = useState("");
	const [balance, setBalance] = useState("0");
	const [isLoading, setIsLoading] = useState(true);
	const [transactions] = useState(MOCK_TRANSACTIONS);
	const [isSwitchWalletOpen, setIsSwitchWalletOpen] = useState(false);

	useEffect(() => {
		const initWallet = async () => {
			try {
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				const { ethereum } = window as any;

				if (!ethereum) {
					console.log("No ethereum object found");
					setIsLoading(false);
					return;
				}

				const result = await magic?.user.getInfo();

				if (!result) return setIsConnected(false);

				const account = result.publicAddress || "";
				setAccount(account);
				setIsConnected(true);
			} catch (error) {
				console.error("Error checking wallet connection:", error);
			} finally {
				setIsLoading(false);
			}
		};

		initWallet();
	}, []);

	const connectWallet = async () => {
		try {
			setIsLoading(true);

			const result = await magic?.wallet.connectWithUI();

			setIsConnected(true);
			setAccount(result?.[0] || "");
		} catch {
			toast.error("Something went wrong...");
		} finally {
			setIsLoading(false);
		}
	};

	const disconnectWallet = () => {
		setAccount("");
		setBalance("0");
		setIsConnected(false);
	};

	// const fetchTokenBalance = async () => {
	// 	try {
	// 		// In a real app, you would use the ERC20 contract to get the balance
	// 		// This is a mock implementation
	// 		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	// 		const { ethereum } = window as any;
	// 		if (!ethereum) return;

	// 		// const provider = new ethers.BrowserProvider(ethereum);

	// 		// Mock balance - replace with actual contract call
	// 		// Example with real contract:
	// 		// const tokenContract = new ethers.Contract(TOKEN_DETAILS.contractAddress, ERC20_ABI, provider)
	// 		// const balance = await tokenContract.balanceOf(account)
	// 		// setBalance(ethers.formatUnits(balance, TOKEN_DETAILS.decimals))

	// 		// Mock implementation:
	// 		setBalance("1500.00");
	// 	} catch (error) {
	// 		console.error("Error fetching token balance:", error);
	// 	}
	// };

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
		toast("Wallet address copied to clipboard");
	};

	const formatAddress = (address: string) => {
		return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
	};

	const refreshData = () => {
		if (account) {
			// fetchTokenBalance("");
			toast("Your wallet data has been refreshed");
		}
	};

	const formatTimestamp = (timestamp: string) => {
		return (
			// biome-ignore lint/style/useTemplate: <explanation>
			new Date(timestamp).toLocaleDateString() +
			" " +
			new Date(timestamp).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			})
		);
	};

	if (isLoading) {
		return (
			<div className="container mx-auto py-10 space-y-8">
				<div className="flex justify-between items-center">
					<h1 className="text-3xl text-zinc-200 font-ClashDisplayBold">
						Token Dashboard
					</h1>
					<Skeleton className="h-10 w-40" />
				</div>
				<div className="grid gap-6 md:grid-cols-2">
					<Skeleton className="h-[360px] w-full" />
					<Skeleton className="h-[360px] w-full" />
				</div>
				<Skeleton className="h-[400px] w-full" />
			</div>
		);
	}

	if (!isConnected) {
		return (
			<div className="container mx-auto py-10 flex flex-col items-center justify-center min-h-[70vh]">
				<Card className="w-full max-w-md">
					<CardHeader>
						<CardTitle className="text-2xl">Connect Your Wallet</CardTitle>
						<CardDescription>
							Connect your Ethereum wallet to view your {TOKEN_DETAILS.symbol}{" "}
							tokens and transactions
						</CardDescription>
					</CardHeader>
					<CardFooter>
						<Button
							onClick={connectWallet}
							className="w-full bg-[#67d269] text-[#131313] hover:bg-[#67d269]/90"
						>
							<Wallet className="mr-2 h-4 w-4" />
							Connect Wallet
						</Button>
					</CardFooter>
				</Card>
			</div>
		);
	}

	return (
		<div className="lg:container lg:mx-auto w-full py-10 space-y-8 font-GeneralSansRegular px-6">
			<div className="flex flex-col lg:flex-row justify-between items-start sm:items-center gap-4">
				<h1 className="text-3xl font-ClashDisplayBold text-zinc-200">
					Token Dashboard
				</h1>
				<div className="flex items-center gap-2">
					<Button
						className="hover:cursor-pointer border text-zinc-400 hover:text-zinc-400 border-white/10 hover:bg-zinc-900/50 bg-zinc-900/50 backdrop-blur-2xl"
						variant="outline"
						size="sm"
						onClick={async () => {
							await magic?.user.logout();
							setIsConnected(false);
						}}
					>
						Logout
					</Button>
					<Button
						className="text-green500 hover:cursor-pointer  border border-green500 hover:text-green500 bg-zinc-900/50 backdrop-blur-2xl"
						variant="outline"
						size="sm"
						onClick={refreshData}
					>
						<RefreshCw className="mr-2 h-4 w-4 text-green500" />
						Refresh
					</Button>
					<Dialog
						open={isSwitchWalletOpen}
						onOpenChange={setIsSwitchWalletOpen}
					>
						<DialogTrigger asChild>
							<Button
								className="text-green500 hover:cursor-pointer  bg-zinc-900 hover:bg-zinc-800 border border-green500  hover:text-green500"
								variant="outline"
								size="sm"
							>
								<ArrowLeftRight className="mr-2 h-4 w-4 text-green500" />
								Switch Wallet
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Switch Wallet</DialogTitle>
								<DialogDescription>
									Choose a different wallet to connect to this dashboard.
								</DialogDescription>
							</DialogHeader>
							<div className="py-4">
								<div className="space-y-4">
									<Button
										variant="outline"
										className="w-full justify-between"
										onClick={() => {
											disconnectWallet();
											setIsSwitchWalletOpen(false);
											setTimeout(() => connectWallet(), 500);
										}}
									>
										<div className="flex items-center">
											<Image
												src="/placeholder.svg?height=24&width=24"
												alt="MetaMask"
												width={24}
												height={24}
												className="mr-2"
											/>
											MetaMask
										</div>
										<ChevronDown className="h-4 w-4" />
									</Button>
									<Button
										variant="outline"
										className="w-full justify-between"
										onClick={() => {
											toast(
												"WalletConnect integration is not implemented in this demo",
											);
										}}
									>
										<div className="flex items-center">
											<Image
												src="/placeholder.svg?height=24&width=24"
												alt="WalletConnect"
												width={24}
												height={24}
												className="mr-2"
											/>
											WalletConnect
										</div>
										<ChevronDown className="h-4 w-4" />
									</Button>
								</div>
							</div>
							<DialogFooter>
								<Button
									variant="destructive"
									onClick={() => {
										disconnectWallet();
										setIsSwitchWalletOpen(false);
									}}
								>
									<LogOut className="mr-2 h-4 w-4" />
									Disconnect
								</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<Card className="bg-zinc-900/50 backdrop-blur-2xl">
					<CardHeader>
						<CardTitle>Wallet Information</CardTitle>
						<CardDescription>
							Your connected Ethereum wallet details
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<div className="text-sm font-medium text-zinc-400 mb-1">
								Wallet Address
							</div>
							<div className="flex items-center gap-2">
								<code className="relative rounded bg-white/20 px-[0.3rem] py-[0.2rem] font-GeneralSansMedium text-green400 text-sm">
									{formatAddress(account)}
								</code>
								<Button
									className="hover:cursor-pointer text-[#131313] hover:bg-zinc-800 border border-green500"
									variant="ghost"
									size="icon"
									onClick={() => copyToClipboard(account)}
								>
									<Copy className="h-4 w-4 text-green500" />
									<span className="sr-only">Copy address</span>
								</Button>
								<Button
									className="hover:cursor-pointer text-[#131313] hover:bg-zinc-800 border border-green500"
									variant="ghost"
									size="icon"
									onClick={() =>
										window.open(
											`https://etherscan.io/address/${account}`,
											"_blank",
										)
									}
								>
									<ExternalLink className="h-4 w-4 text-green500" />
									<span className="sr-only">View on Etherscan</span>
								</Button>
							</div>
						</div>
						<Separator className="bg-white/20" />
						<div className="block  mt-12">
							<div className="text-sm font-medium text-muted-foreground mb-1">
								Token Balance
							</div>
							<h1 className="text-6xl font-bold text-green500 font-ClashDisplayBold">
								{balance} {TOKEN_DETAILS.symbol}
							</h1>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-zinc-900/50 backdrop-blur-2xl">
					<CardHeader>
						<CardTitle>Token Sale</CardTitle>
						<CardDescription>
							Limited time offer - Buy {TOKEN_DETAILS.symbol} tokens now
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-center p-4">
							<Image
								src="/logo.svg"
								alt="Token Sale"
								width={240}
								height={120}
								className="rounded-lg object-cover"
							/>
						</div>
						<div className="text-center mt-2 mb-4">
							<p className="text-sm text-muted-foreground">
								Current price: 0.005 ETH per {TOKEN_DETAILS.symbol}
							</p>
							<p className="text-xs text-muted-foreground mt-1">
								Sale ends in 7 days
							</p>
						</div>
					</CardContent>
					<CardFooter>
						<Button
							className="w-full bg-green500 text-[#131313] font-GeneralSansMedium hover:bg-[#67d269]/90 transition duration-500 hover:cursor-pointer"
							size="lg"
						>
							Buy {TOKEN_DETAILS.symbol} Tokens
						</Button>
					</CardFooter>
				</Card>
			</div>

			<Card className="bg-zinc-900/50 backdrop-blur-2xl">
				<CardHeader>
					<CardTitle>Transaction History</CardTitle>
					<CardDescription>
						Your {TOKEN_DETAILS.symbol} token transactions
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Type</TableHead>
								<TableHead>Amount</TableHead>
								<TableHead className="hidden md:table-cell">
									Transaction Hash
								</TableHead>
								<TableHead className="hidden md:table-cell">From/To</TableHead>
								<TableHead>Date</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{transactions.map((tx, index) => (
								<TableRow key={String(index)}>
									<TableCell>
										<span
											className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
												tx.type === "buy"
													? "bg-[#67d269]/20 text-[#67d269] dark:bg-[#67d269]/30 dark:text-[#67d269]"
													: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
											}`}
										>
											{tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
										</span>
									</TableCell>
									<TableCell className="font-medium">
										{tx.amount} {TOKEN_DETAILS.symbol}
									</TableCell>
									<TableCell className="hidden md:table-cell">
										<div className="flex items-center gap-1">
											<code className="text-xs">{tx.hash}</code>
											<Button
												variant="ghost"
												size="icon"
												className="h-6 w-6"
												onClick={() =>
													window.open(
														`https://etherscan.io/tx/${tx.hash}`,
														"_blank",
													)
												}
											>
												<ExternalLink className="h-3 w-3" />
												<span className="sr-only">View on Etherscan</span>
											</Button>
										</div>
									</TableCell>
									<TableCell className="hidden md:table-cell">
										{tx.type === "buy" ? (
											<span className="text-xs">From: {tx.from}</span>
										) : (
											<span className="text-xs">To: {tx.to}</span>
										)}
									</TableCell>
									<TableCell className="text-xs md:text-sm">
										{formatTimestamp(tx.timestamp)}
									</TableCell>
								</TableRow>
							))}
							{transactions.length === 0 && (
								<TableRow>
									<TableCell
										colSpan={5}
										className="text-center py-6 text-muted-foreground"
									>
										No transactions found
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
