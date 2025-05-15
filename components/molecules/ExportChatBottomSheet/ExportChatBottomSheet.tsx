import * as Dialog from "@radix-ui/react-dialog";
import { LoaderCircle } from "lucide-react";
import { useTransition } from "react";

import type { BottomSheetProps } from "@/components/atoms/BottomSheet/BottomSheet";
import { BottomSheet } from "@/components/atoms/BottomSheet/BottomSheet";

export interface ExportChatBottomSheet extends BottomSheetProps {
	onClose?: () => void;
	action?: () => Promise<void> | void;
}

export function ExportChatBottomSheet({
	action,
	...rest
}: ExportChatBottomSheet) {
	const [pending, startTransition] = useTransition();

	function handleAction() {
		startTransition(async () => {
			await action?.();
		});
	}

	return (
		<BottomSheet {...rest}>
			<Dialog.Content
				className="fixed bottom-0 max-h-[80vh] overflow-y-auto rounded-t-[24px] inset-x-0
  lg:rounded-[24px] lg:max-w-lg lg:bottom-auto lg:inset-x-auto lg:left-1/2 lg:top-1/2
  lg:-translate-x-1/2 lg:-translate-y-1/2 lg:max-h-[90vh]
  bg-neutral100 focus:outline-none data-[state=open]:animate-modalOpen lg:data-[state=open]:animate-modalOpenDesktop
  data-[state=closed]:animate-modalClose lg:data-[state=closed]:animate-modalCloseDesktop z-[60]"
			>
				<div className="pt-2 pb-3 w-full lg:hidden flex justify-center">
					<span className="w-12 h-1 rounded-[8px] bg-alphaBlack08" />
				</div>

				<div className="p-6 flex flex-col items-center">
					{/* <Pictogram state="brand">
						<CommentAlertIcon className="text-neutral100" />
					</Pictogram> */}

					<div className="flex flex-col gap-y-2 my-6">
						<Dialog.Title className="text-brand500 font-SatoshiBold text-[1.5rem] text-center leading-[133.33%] tracking-[-0.48px]">
							Export chat
						</Dialog.Title>

						<p className="text-neutral500 text-center font-SatoshiMedium text-[1rem] leading-[150%] tracking-[-0.32px]">
							This action will export the chat so our team can review it more
							accurately and enhance your experience. This process may take a
							few seconds, but your chat history will not be lost. Do you want
							to continue?
						</p>
					</div>

					<div className="w-full flex flex-col gap-y-4">
						<button
							disabled={pending}
							onClick={handleAction}
							type="button"
							className="w-full py-[1rem] h-14 px-[1.5rem] border border-alphaBlack08 bg-brand500 hover:bg-brand400 transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none rounded-[8px] flex items-center justify-center"
						>
							{pending ? (
								<LoaderCircle className="text-neutral100 animate-spin" />
							) : (
								<span className="text-neutral100 font-SatoshiBold text-[1rem] leading-[150%] tracking-[-0.02rem] whitespace-nowrap">
									Yes, export chat
								</span>
							)}
						</button>
						<Dialog.Close
							type="button"
							className="w-full py-[1rem] px-[1.5rem] border border-alphaBlack08 neutral100 hover:bg-alphaBlack08 transition-colors duration-300 rounded-[8px] flex items-center justify-center"
						>
							<span className="text-neutral500 font-SatoshiBold text-[1rem] leading-[150%] tracking-[-0.02rem]">
								Close
							</span>
						</Dialog.Close>
					</div>
				</div>
			</Dialog.Content>
		</BottomSheet>
	);
}
