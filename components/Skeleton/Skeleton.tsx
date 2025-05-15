import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const skeletonClassname = tv({
	base: "relative bg-white/5 flex backdrop-blur-2xl shrink-0 rounded-lg overflow-hidden after:block after:absolute after:w-full after:h-full after:animate-skeleton after:-translate-x-[100%] after:bg-skeletonGradient",
});

export type SkeletonProps = ComponentProps<"div"> &
	VariantProps<typeof skeletonClassname> & {
		width?: number | string;
		height?: number | string;
		borderRadius?: number | string;
	};

export function Skeleton({
	width,
	height,
	borderRadius = 8,
	className,
	...rest
}: SkeletonProps) {
	const skeleton = skeletonClassname({ className });

	return (
		<div
			className={skeleton}
			style={{ height, width, borderRadius }}
			{...rest}
		/>
	);
}
