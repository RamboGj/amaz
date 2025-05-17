import { Toaster } from "@/components/molecules/Toaster";
import type { ToastOptions } from "react-hot-toast";
import { toast as rhtoast } from "react-hot-toast";

export interface ToastPayload {
	title?: string;
	description: string;
	icon?: boolean;
	progressBar?: boolean;
	options?: ToastOptions;
}

const DEFAULT_TOAST_REMOVE_DELAY = 3 * 1000; // 3 seconds

export const toast = {
	error: ({
		description,
		icon = true,
		progressBar = true,
		title = "Error",
		options,
	}: ToastPayload) => {
		rhtoast.custom(
			(t) => (
				<Toaster.Provider t={t} state="error">
					<Toaster.Root key={t.id}>
						<Toaster.Wrapper>
							{icon && <Toaster.Icon />}

							<Toaster.Content title={title} description={description} />
							{/* <Toaster.Close /> */}
						</Toaster.Wrapper>

						{progressBar && <Toaster.Progress />}
					</Toaster.Root>
				</Toaster.Provider>
			),
			{
				removeDelay: DEFAULT_TOAST_REMOVE_DELAY,
				...options,
			},
		);
	},

	success: ({
		description,
		icon = true,
		progressBar = true,
		title = "Success",
		options,
	}: ToastPayload) => {
		rhtoast.custom(
			(t) => (
				<Toaster.Provider t={t} state="success">
					<Toaster.Root key={t.id}>
						<Toaster.Wrapper>
							{icon && <Toaster.Icon />}

							<Toaster.Content title={title} description={description} />
							{/* <Toaster.Close /> */}
						</Toaster.Wrapper>

						{progressBar && <Toaster.Progress />}
					</Toaster.Root>
				</Toaster.Provider>
			),
			{
				removeDelay: DEFAULT_TOAST_REMOVE_DELAY,
				...options,
			},
		);
	},

	warning: ({
		description,
		icon = true,
		progressBar = true,
		title = "Warning",
		options,
	}: ToastPayload) => {
		rhtoast.custom(
			(t) => (
				<Toaster.Provider t={t} state="warning">
					<Toaster.Root key={t.id}>
						<Toaster.Wrapper>
							{icon && <Toaster.Icon />}

							<Toaster.Content title={title} description={description} />
							{/* <Toaster.Close /> */}
						</Toaster.Wrapper>

						{progressBar && <Toaster.Progress />}
					</Toaster.Root>
				</Toaster.Provider>
			),
			{
				removeDelay: DEFAULT_TOAST_REMOVE_DELAY,
				...options,
			},
		);
	},

	neutral: ({
		description,
		icon = true,
		progressBar = true,
		title = "Neutral",
		options,
	}: ToastPayload) => {
		rhtoast.custom(
			(t) => (
				<Toaster.Provider t={t} state="neutral">
					<Toaster.Root key={t.id}>
						<Toaster.Wrapper>
							{icon && <Toaster.Icon />}

							<Toaster.Content title={title} description={description} />
							{/* <Toaster.Close /> */}
						</Toaster.Wrapper>

						{progressBar && <Toaster.Progress />}
					</Toaster.Root>
				</Toaster.Provider>
			),
			{
				removeDelay: DEFAULT_TOAST_REMOVE_DELAY,
				...options,
			},
		);
	},
};
