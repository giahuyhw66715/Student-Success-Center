import { v4 } from "uuid";
import Heading from "../Heading";
import HomeCareerItem from "./HomeCareerItem";
import { Button } from "@nextui-org/react";

const careers = [
    {
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507491/marketing-icon_zmsl7k.png",
        title: "Marketing",
        available: "1.900",
    },
    {
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507492/store-icon_ij0uua.png",
        title: "Bán lẻ",
        available: "1.900",
    },
    {
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507490/it-icon_ed7eky.png",
        title: "Công nghệ thông tin",
        available: "1.900",
    },
    {
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507488/customer-service-icon_uwskyk.png",
        title: "Dịch vụ khách hàng",
        available: "1.900",
    },
    {
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507487/communication-icon_ufu3aq.png",
        title: "Truyền thông",
        available: "1.900",
    },
    {
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507492/software-icon_cbptye.png",
        title: "Phần mềm",
        available: "1.900",
    },
    {
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507488/education-icon_rlu9hw.png",
        title: "Giáo dục",
        available: "1.900",
    },
    {
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507487/hr-icon_vbsj85.png",
        title: "HR",
        available: "1.900",
    },
];

const HomeCareerList = () => {
    return (
        <div className="py-7 px-14">
            <Heading className="text-center">Danh mục ngành nghề</Heading>
            <div className="grid grid-cols-4 gap-5">
                {careers?.map((career) => (
                    <HomeCareerItem key={v4()} career={career} />
                ))}
            </div>
            <div className="text-center mt-5">
                <Button
                    radius="full"
                    className="font-semibold"
                    variant="bordered"
                    color="primary"
                >
                    Xem thêm
                </Button>
            </div>
        </div>
    );
};

export default HomeCareerList;
