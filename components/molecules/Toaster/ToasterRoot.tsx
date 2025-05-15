import { useContext } from "react";
import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

import { ToasterContext } from "./ToasterProvider";

type ToastRootProps = ComponentProps<"div">;

const toasterRootStyle = tv({
	base: "overflow-hidden max-w-[469px] border border-alphaBlack08 bg-alphaBlack04 rounded-[16px] backdrop-blur-[24px] z-50 data-[visible=false]:animate-fadeOutLeft data-[visible=true]:animate-fadeInRight",
});

export function ToasterRoot({ className, ...rest }: ToastRootProps) {
	const { t } = useContext(ToasterContext);

	return (
		<div
			data-visible={t?.visible}
			className={toasterRootStyle({ className })}
			{...rest}
		/>
	);
}
