import { useContext } from "react";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

import { ToasterContext } from "./ToasterProvider";

const toasterContentStyle = tv({
	slots: {
		wrapper: "mx-4 flex flex-col",
		titleStyle:
			"text-[1rem] leading-[150%] tracking-[-0.32px] font-SatoshiBold text-success500",
		descriptionStyle:
			"text-[0.875rem] leading-[171.429%] tracking-[-0.28px] font-SatoshiMedium text-neutral500 block mt-2 line-clamp-3",
	},

	variants: {
		state: {
			success: {
				titleStyle: "text-green500",
			},
			error: {
				titleStyle: "text-red-500",
			},
			warning: {
				titleStyle: "text-amber-500",
			},
			neutral: {
				titleStyle: "text-blue-500",
			},
		},
	},
});

export interface ToasterContentProps
	extends ComponentProps<"div">,
		VariantProps<typeof toasterContentStyle> {
	title?: string;
	description?: string;
}

export function ToasterContent({
	className,
	title,
	description,
	...rest
}: ToasterContentProps) {
	const { state } = useContext(ToasterContext);

	const { wrapper, titleStyle, descriptionStyle } = toasterContentStyle({
		className,
		state,
	});

	return (
		<div className={wrapper({ className })} {...rest}>
			{title && <strong className={titleStyle()}>{title}</strong>}
			{description && <p className={descriptionStyle()}>{description}</p>}
		</div>
	);
}
