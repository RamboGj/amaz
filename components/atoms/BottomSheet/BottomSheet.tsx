import * as Dialog from "@radix-ui/react-dialog";
import type { DialogProps } from "@radix-ui/react-dialog";

export type BottomSheetProps = DialogProps;

export function BottomSheet({ children, ...rest }: BottomSheetProps) {
	return (
		<Dialog.Root {...rest}>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
				{children}
			</Dialog.Portal>
		</Dialog.Root>
	);
}
