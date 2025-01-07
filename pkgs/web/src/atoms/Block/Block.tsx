import { ReactNode } from "react";

type BlockProps = {
    [key: string]: any;
    scale: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "screen" | "auto";
    children: ReactNode;
};

export type BlockTailwindClasses = "border" | "border-2" | "border-4" | "border-8" | "border-16";

const scaleClassesMap: Record<BlockProps['scale'], string> = {
    full: "w-full h-full",
    screen: "w-screen h-screen",
    auto: "w-auto h-auto",
    sm: "w-1/5 h-1/5",
    md: "w-1/2 h-1/2",
    lg: "w-3/5 h-3/5",
    xl: "w-4/5 h-4/5",
    "2xl": "w-11/12 h-4/5"
};

export function Block({ children, scale, ...props }: BlockProps) {
    const scaleClasses = scaleClassesMap[scale] || "";
    props.className = `${props.className || ""} ${scaleClasses}`.trim();
    return <div {...props}>{children}</div>;
}

export function ThemedBlock({ children, scale, ...props }: BlockProps) {
    const scaleClasses = scaleClassesMap[scale] || "";
    const themeClasses = "mugi:bg-straw dark:bg-gray-800";
    props.className = `${props.className || ""} ${scaleClasses} ${themeClasses}`.trim();
    return <div {...props}>{children}</div>;
}
