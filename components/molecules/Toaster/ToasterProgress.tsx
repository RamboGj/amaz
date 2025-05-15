import { useContext } from "react";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

import { ToasterContext } from "./ToasterProvider";

const toasterProgressStyle = tv({
	slots: {
		wrapper: "relative h-1 w-full bg-alphaBlack08",
		barStyle: "absolute inset-x-0 h-1 animate-toasterProgress rounded-[4px]",
	},
	variants: {
		state: {
			success: {
				barStyle: "bg-success500",
			},
			error: {
				barStyle: "bg-error500",
			},
			warning: {
				barStyle: "bg-warning500",
			},
			neutral: {
				barStyle: "bg-feedbackNeutral500",
			},
		},
	},
});

interface ToasterProgressProps
	extends ComponentProps<"div">,
		VariantProps<typeof toasterProgressStyle> {}

export function ToasterProgress({ className, ...rest }: ToasterProgressProps) {
	const { state, t } = useContext(ToasterContext);

	const { wrapper, barStyle } = toasterProgressStyle({ className, state });

	return (
		<div className={wrapper({ className })} {...rest}>
			<div
				style={{
					animationDuration: `${t?.duration}ms`,
				}}
				className={barStyle()}
			/>
		</div>
	);
}
