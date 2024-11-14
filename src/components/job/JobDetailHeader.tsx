import Heading from "../Heading";
import { Button } from "@nextui-org/react";

const JobDetailHeader = ({
    title,
    company,
}: {
    title: string;
    company: string;
}) => {
    return (
        <div className="flex items-center justify-between py-10 px-14">
            <div>
                <Heading className="mb-1">{title}</Heading>
                <span className="text-primary uppercase">{company}</span>
            </div>
            <Button
                color="secondary"
                variant="bordered"
                size="lg"
                className="font-semibold"
            >
                Nộp đơn ứng tuyển
            </Button>
        </div>
    );
};

export default JobDetailHeader;
