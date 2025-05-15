import { useContext } from "react";
import type { ComponentProps } from "react";
import toast from "react-hot-toast";
import { tv } from "tailwind-variants";

import { ToasterContext } from "./ToasterProvider";
import { Cross } from "lucide-react";

const toasterCloseStyle = tv({
	base: "text-alphaBlack16 flex shrink-0",
});

export type ToastCloseProps = ComponentProps<"svg">;

export function ToasterClose({ className, ...rest }: ToastCloseProps) {
	const { t } = useContext(ToasterContext);

	return (
		<Cross
			onClick={() => toast.dismiss(t?.id)}
			role="button"
			aria-label="Close toaster"
			className={toasterCloseStyle({ className })}
			{...rest}
		/>
	);
}
