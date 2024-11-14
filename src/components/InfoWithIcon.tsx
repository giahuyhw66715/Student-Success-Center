import { LucideProps } from "lucide-react";
import React from "react";
import Icon from "./Icon";
const InfoWithIcon = ({
    icon,
    size = "sm",
    children,
}: {
    icon: React.FC<LucideProps>;
    size?: "sm" | "lg";
    children: React.ReactNode;
}) => {
    return (
        <div className="flex gap-x-2">
            <Icon
                icon={icon}
                className={`${size === "sm" ? "w-4 h-4" : "w-5 h-5"}`}
            />
            <span
                className={`text-primary ${
                    size === "sm" ? "text-xs" : "text-sm"
                }`}
            >
                {children}
            </span>
        </div>
    );
};

export default InfoWithIcon;
