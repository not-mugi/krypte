import { ReactNode } from "react";

type BlockProps = {
	[key: string]: any;
	scale: "sm" | "md" | "lg" | "xl" | "full" | "screen" | "auto";
    children: ReactNode;
};

export function Block({ children, scale, ...props }: BlockProps) {
    let scaleClasses = "";

    switch (scale) {
        case "full":
            scaleClasses = "w-full h-full";
            break;
        case "screen":
            scaleClasses = "w-screen h-screen";
            break;
        case "auto":
            scaleClasses = "w-auto h-auto";
            break;
        case "sm":
            scaleClasses = "w-1/5 h-1/5";
            break;
        case "md":
            scaleClasses = "w-1/2 h-1/2";
            break;
        case "lg":
            scaleClasses = "w-3/5 h-3/5";
            break;
        case "xl":
            scaleClasses = "w-4/5 h-4/5";
            break;
        default:
    }

    props.className = `${props.className || ""} ${scaleClasses}`.trim();
    return <div {...props}>{children}</div>;
}

export function ThemedBlock({ children, scale, ...props }: BlockProps) {
    let scaleClasses = "";
    let themeClasses = "mugi:bg-straw dark:bg-gray-800";

    switch (scale) {
        case "full":
            scaleClasses = "w-full h-full";
            break;
        case "screen":
            scaleClasses = "w-screen h-screen";
            break;
        case "auto":
            scaleClasses = "w-auto h-auto";
            break;
        case "sm":
            scaleClasses = "w-1/5 h-1/5";
            break;
        case "md":
            scaleClasses = "w-1/2 h-1/2";
            break;
        case "lg":
            scaleClasses = "w-3/5 h-3/5";
            break;
        case "xl":
            scaleClasses = "w-4/5 h-4/5";
            break;
        default:
    }

    props.className = `${props.className || ""} ${scaleClasses} ${themeClasses}`.trim();
    return <div {...props}>{children}</div>;
}