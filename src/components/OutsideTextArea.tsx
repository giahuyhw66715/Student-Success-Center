import { Textarea } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";

const OutsideTextArea = ({
    label,
    placeholder,
    inputWrapperClass,
}: {
    label: string;
    placeholder: string;
    inputWrapperClass?: string;
}) => {
    return (
        <Textarea
            label={label}
            labelPlacement="outside"
            variant="bordered"
            color="primary"
            placeholder={placeholder}
            classNames={{
                label: "font-semibold",
                base: "h-full",
                inputWrapper: twMerge("!h-40", inputWrapperClass),
            }}
        />
    );
};

export default OutsideTextArea;
