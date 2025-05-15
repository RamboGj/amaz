import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const toasterWrapperStyle = tv({
	base: "flex items-start p-6",
});

export type ToasterWrapperProps = ComponentProps<"div">;

export function ToasterWrapper({
	className,

	...rest
}: ToasterWrapperProps) {
	return (
		<div
			className={toasterWrapperStyle({
				className,
			})}
			{...rest}
		/>
	);
}
