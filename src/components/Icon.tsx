import { LucideProps } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function Icon({
    icon: Icon,
    className,
    fill = false,
}: {
    icon: React.FC<LucideProps>;
    className?: string;
    fill?: boolean;
}) {
    return (
        <Icon
            fill={fill ? "currentColor" : "none"}
            className={twMerge(`text-primary w-5 h-5`, className)}
        />
    );
}
