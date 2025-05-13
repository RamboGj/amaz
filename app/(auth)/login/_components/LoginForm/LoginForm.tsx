"use client";

import { magic } from "@/app/utils/magic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { setCookie } from "cookies-next";

export function LoginForm() {
	const { push } = useRouter();

	async function handleLogin() {
		const result = await magic?.wallet.connectWithUI();

		if (result?.length) {
			const token = await magic?.user.generateIdToken({
				attachment: result[0],
			});

			if (token) {
				setCookie("token", token);

				push("/dashboard");
			} else {
				toast.error("Something went wrong...");
			}
		}
	}

	return (
		<div className="h-screen flex flex-col justify-center items-center w-full bg-[#131313] bg-[url('/Elements.png')] bg-no-repeat bg-cover px-6 lg:px-0">
			<Image src={"/logo.svg"} alt="AMA Logo" width={64} height={64} />
			<h1 className="font-ClashDisplayBold text-white text-[3rem] block mt-8">
				Log in
			</h1>

			<button
				onClick={handleLogin}
				type="button"
				className="h-[56px] w-[360px] block mt-8 bg-green500 rounded-[12px] outline outline-offset-[-1px] outline-white/20 hover:cursor-pointer hover:bg-green400 transiton duration-500"
			>
				<span className="font-GeneralSansBold">Login</span>
			</button>

			{/* <form
                        className="max-w-[720px] mx-auto flex flex-col mt-12 w-full gap-y-6"
                        action={handleLogin}
                    >
                        <fieldset className="flex flex-col gap-y-2">
                            <label
                                className="font-GeneralSansMedium text-white text-[1.25rem]"
                                htmlFor="email"
                            >
                                E-mail
                            </label>
                            <div className="px-4 h-[56px] text-white font-GeneralSansMedium rounded-[8px] bg-white/10 ring-1 ring-white/30 focus-within:ring-2 focus-within:ring-green400 transition duration-500 placeholder:text-[#838383]">
                                <input
                                    className="flex flex-1 h-full w-full focus:outline-none"
                                    placeholder="Input your-email..."
                                    type="email"
                                    name="email"
                                    id="email"
                                />
                            </div>
                        </fieldset>
                        <fieldset className="flex flex-col gap-y-2">
                            <label
                                className="font-GeneralSansMedium text-white text-[1.25rem]"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <div className="px-4 h-[56px] text-white font-GeneralSansMedium rounded-[8px] bg-white/10 ring-1 ring-white/30 focus-within:ring-2 focus-within:ring-green400 transition duration-500 placeholder:text-[#838383]">
                                <input
                                    className="flex flex-1 h-full w-full focus:outline-none"
                                    placeholder="Input your password..."
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                            </div>
                        </fieldset>
        
                        <p className="font-GeneralSansRegular cursor-default text-[#838383]">
                            {"Don't"} have an account?{" "}
                            <Link
                                className="font-GeneralSansMedium text-green500 hover:text-green400 transition-colors duration-500"
                                href={"/sign-up"}
                            >
                                Sign up
                            </Link>
                        </p>
        
                        <button className="h-[56px] block mt-8 bg-green500 rounded-[12px] outline outline-offset-[-1px] outline-white/20 hover:cursor-pointer hover:bg-green400 transiton duration-500">
                            <span className="font-GeneralSansBold">Login</span>
                        </button>
                    </form> */}
		</div>
	);
}
