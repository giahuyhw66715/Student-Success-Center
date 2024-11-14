import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
import Tag from "../Tag";
import { v4 } from "uuid";

type CareerHandbookItemProps = {
    image: string;
    title: string;
    tags: string[];
    href: string;
};

const HomeCareerHandbookItem = ({
    careerHandbook,
}: {
    careerHandbook: CareerHandbookItemProps;
}) => {
    return (
        <Card>
            <CardHeader className="p-0">
                <Link href={careerHandbook.href}>
                    <Image
                        alt="Card background"
                        className="w-full object-cover rounded-none"
                        src={careerHandbook.image}
                    />
                </Link>
            </CardHeader>
            <CardBody className="overflow-visible pt-4 pb-10 px-7">
                <div className="flex items-center gap-2">
                    {careerHandbook.tags.map((tag) => (
                        <Tag key={v4()}>{tag}</Tag>
                    ))}
                </div>
                <Link href={careerHandbook.href} className="font-semibold mt-2">
                    {careerHandbook.title}
                </Link>
            </CardBody>
        </Card>
    );
};

export default HomeCareerHandbookItem;
