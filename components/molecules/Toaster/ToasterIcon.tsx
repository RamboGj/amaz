import { useContext } from "react";
import type { ComponentProps, ReactNode } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

import { ToasterContext } from "./ToasterProvider";
import type { ToasterState } from "./ToasterProvider";
import { CheckCircle, CrossIcon, TriangleAlert } from "lucide-react";

const toasterIconStyle = tv({
	base: "flex shrink-0",
	variants: {
		state: {
			success: "text-success500",
			error: "text-error500",
			warning: "text-warning500",
			neutral: "text-feedbackNeutral500",
		},
	},
});

export interface ToastIconProps
	extends ComponentProps<"svg">,
		VariantProps<typeof toasterIconStyle> {}

export function ToasterIcon({ className, ...rest }: ToastIconProps) {
	const { state } = useContext(ToasterContext);

	const iconMap = new Map<ToasterState, ReactNode>([
		[
			"success",
			<CheckCircle
				key="success"
				className={toasterIconStyle({ className, state })}
				{...rest}
			/>,
		],
		[
			"neutral",
			<CheckCircle
				key="neutral"
				className={toasterIconStyle({ className, state })}
				{...rest}
			/>,
		],
		[
			"error",
			<CrossIcon
				key="error"
				className={toasterIconStyle({ className, state })}
				{...rest}
			/>,
		],
		[
			"warning",
			<TriangleAlert
				key="warning"
				className={toasterIconStyle({ className, state })}
				{...rest}
			/>,
		],
	]);

	return iconMap.get(state);
}
