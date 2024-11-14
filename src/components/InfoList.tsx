import { v4 } from "uuid";
import Heading from "./Heading";
import { twMerge } from "tailwind-merge";

type Props = {
    title?: string;
    array: string[];
    listClassName?: string;
};
const InfoList = ({ title, array, listClassName }: Props) => {
    return (
        <div>
            {title && <Heading className="text-lg mb-2">{title}</Heading>}
            <ul
                className={twMerge(
                    `list-disc flex flex-col gap-2 pl-5`,
                    listClassName
                )}
            >
                {array.map((item) => (
                    <li key={v4()}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default InfoList;
