import React from "react";
import { twMerge } from "tailwind-merge";

const Tag = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <span
            className={twMerge(
                "inline-block rounded-md px-3 py-1 text-xs border border-primary",
                className
            )}
        >
            {children}
        </span>
    );
};

export default Tag;
