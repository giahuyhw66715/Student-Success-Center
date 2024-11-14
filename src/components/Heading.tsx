import React from "react";
import { twMerge } from "tailwind-merge";

const Heading = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h3
            className={twMerge(
                "text-2xl font-bold text-primary mb-5",
                className
            )}
        >
            {children}
        </h3>
    );
};

export default Heading;
