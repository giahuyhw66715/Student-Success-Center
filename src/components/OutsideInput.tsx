import { LucideProps } from "lucide-react";
import React from "react";
import Icon from "./Icon";
import { Input } from "@nextui-org/react";

const OutsideInput = ({
    label,
    placeholder,
    icon,
}: {
    label: string;
    placeholder: string;
    icon?: React.FC<LucideProps>;
}) => {
    return (
        <div className="flex items-end gap-3">
            {icon && <Icon icon={icon} className="w-10 h-10 " />}
            <Input
                label={label}
                labelPlacement="outside"
                variant="bordered"
                color="primary"
                placeholder={placeholder}
                classNames={{
                    label: "font-semibold",
                }}
            />
        </div>
    );
};

export default OutsideInput;
