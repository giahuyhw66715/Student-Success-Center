import { Button, Input, Link } from "@nextui-org/react";
import Heading from "../components/Heading";

const developmentCenter = [
    {
        key: "Địa chỉ",
        value: "Phòng 2.28, tòa A, 69/68 Đặng Thùy Trâm, phường 13, quận Binh Thạnh, Thành phố Hồ Chí Minh",
    },
    {
        key: "Email",
        value: "qhdn@vlu.edu.vn",
    },
    {
        key: "Số điện thoại",
        value: "028. 7109 9326",
    },
];

const businessList = [
    "Danh sách doanh nghiệp",
    "Danh sách công việc",
    "Doanh nghiệp nổi bật",
    "Hỏi đáp doanh nghiệp",
];

const applicationList = [
    "CV cá nhân",
    "Ứng viên nổi bật",
    "CV hay",
    "Cẩm nang",
    "Mạng lưới sinh viên",
];

const Footer = () => {
    return (
        <div className="bg-[url('https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507493/VLU_wkiaci.webp')] bg-cover bg-no-repeat bg-center ">
            <div className="bg-white bg-opacity-80 px-14 py-20 grid grid-cols-[2fr_1fr_1fr_1fr] gap-5">
                <FooterItem
                    title="Trung tâm phát triển năng lực"
                    objectArray={developmentCenter}
                />
                <FooterItem title="Doanh nghiệp" stringArray={businessList} />
                <FooterItem title="Ứng viên" stringArray={applicationList} />
                <div>
                    <Heading className="text-secondary">Liên hệ tư vấn</Heading>
                    <Input
                        color="primary"
                        variant="bordered"
                        placeholder="Nhập email của bạn"
                        classNames={{
                            inputWrapper: "border-gray-950",
                        }}
                    />
                    <Button fullWidth color="primary" className="mt-3">
                        Đăng kí tư vấn
                    </Button>
                </div>
            </div>
        </div>
    );
};

const FooterItem = ({
    title,
    objectArray,
    stringArray,
}: {
    title: string;
    objectArray?: { key: string; value: string }[];
    stringArray?: string[];
}) => {
    return (
        <div className="text-primary">
            <Heading className="text-secondary capitalize mb-2">
                {title}
            </Heading>
            {objectArray?.map((item) => (
                <p key={item.key}>
                    <strong className="font-semibold">
                        {item.key}: {""}
                    </strong>
                    <span className="text-sm font-medium">{item.value}</span>
                </p>
            ))}
            {stringArray && (
                <div className="flex flex-col gap-2">
                    {stringArray.map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="text-sm font-semibold"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Footer;
