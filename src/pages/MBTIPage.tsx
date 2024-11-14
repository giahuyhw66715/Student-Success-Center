import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Image,
    useDisclosure,
} from "@nextui-org/react";
import Heading from "../components/Heading";
import InfoList from "../components/InfoList";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import MultipleChoiceModal from "../components/MultipleChoiceModal";

const definitions = [
    "Trắc nghiệm tính cách MBTI là một phương pháp sử dụng một loạt các câu hỏi trắc nghiệm để phân tích tính cách của người làm test.",
    "MBTI dùng một chuỗi các câu hỏi trắc nghiệm liên quan đến các vấn đề cơ bản trong cuộc sống với các đáp án để lựa chọn. Tổng kết bài trắc nghiệm sẽ cho ra kết quả để đánh giá bạn là người có tính cách như thế nào thông qua phương pháp phân loại.",
];

const characteristicList = [
    {
        title: "ISTJ",
        desc: "Người trách nhiệm",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507492/istj_fbs0m0.png",
    },
    {
        title: "ISFP",
        desc: "Người nghệ sĩ",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507489/isfp_urjv62.png",
    },
    {
        title: "INSP",
        desc: "Người lý tưởng hóa",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507491/insp_mvywzs.png",
    },
    {
        title: "INTJ",
        desc: "Nhà khoa học",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507491/intj_g7quff.png",
    },
    {
        title: "ISFJ",
        desc: "Người nuôi dưỡng",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507488/isfj_xjolvs.png",
    },
    {
        title: "ISTP",
        desc: "Nhà kỹ thuật",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507490/istp_h6brwy.png",
    },
    {
        title: "INFJ",
        desc: " Người che chở",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507492/infj_mzbt35.png",
    },
    {
        title: "INTF",
        desc: "Nhà tư duy",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507486/intf_sknzf7.png",
    },
    {
        title: "ENFJ",
        desc: "Người cho đi",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731511391/image1-1683886516616340019752_qusa3h.webp",
    },
    {
        title: "ENTJ",
        desc: "Nhà điều hành",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731511646/smiling-vietnamese-businessman-sitting-desk-office-looking-camera_oqwk7u.jpg",
    },
    {
        title: "ESFJ",
        desc: "Người quan tâm",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731511647/local-retailer-taking-care-his-business_lzcohj.jpg",
    },
    {
        title: "ESTJ",
        desc: "Người giám hộ",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731511391/114048907_d9ur5v.jpg",
    },
    {
        title: "ENFP",
        desc: "Người truyền cảm hứng",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731511392/ted2018_20180411_1rl9584_3000_zynlen.webp",
    },
    {
        title: "ENTP",
        desc: "Người nhìn xa",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731511402/Lovepik_com-500651292-long-term-vision_rdntah.jpg",
    },
    {
        title: "ESFP",
        desc: "Người trình diễn",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731511391/298063154-2157600807783992-8793796436718936650-n-501_bq4ke1.jpg",
    },
    {
        title: "ESTP",
        desc: "Người thực thi",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731511391/Quach-Thi-Lan1_br6sk9.jpg",
    },
];

const MBTIPage = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className="container mb-10">
            <div className="text-center">
                <Heading className="text-3xl">
                    Trắc nghiệm tính cách MBTI
                </Heading>
                <Button
                    onPress={onOpen}
                    color="secondary"
                    variant="ghost"
                    className="font-semibold"
                    size="lg"
                >
                    Làm bài test
                </Button>
                <MultipleChoiceModal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                />
                <Divider className="my-10 bg-gray-400" />
            </div>
            <div className="flex flex-col gap-5">
                <InfoList
                    title="1. Trắc nghiệm tính cách MBIT là gì?"
                    array={definitions}
                />
                <InfoList
                    title="2. 16 loại tính cách theo MBIT "
                    array={[
                        "Bài test MBIT sẽ dựa trên 4 nhóm tính cách cơ bản, mỗi nhóm sẽ gồm một cặp đối lập nhau, mỗi yếu tố của 4 nhóm trên sẽ được kết hợp lại và ạo thành 16 tính cách, bao gồm:",
                    ]}
                />
            </div>
            <Swiper
                slidesPerView={4}
                slidesPerGroup={4}
                grid={{
                    rows: 2,
                    fill: "row",
                }}
                spaceBetween={30}
                wrapperClass="pb-10"
                grabCursor={true}
                pagination={{
                    clickable: true,
                    bulletClass:
                        "swiper-pagination-bullet !w-10 !h-1 border border-primary !rounded-none",
                    bulletActiveClass:
                        "swiper-pagination-bullet-active !bg-primary",
                }}
                modules={[Grid, Pagination]}
            >
                {characteristicList.map((characteristic) => (
                    <SwiperSlide key={v4()} className="!h-auto">
                        <CharacteristicCardItem
                            characteristic={characteristic}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

const CharacteristicCardItem = ({
    characteristic,
}: {
    characteristic: {
        title: string;
        desc: string;
        image: string;
    };
}) => {
    return (
        <Card className="py-4 border-2 mt-5">
            <CardHeader className="pb-0">
                <Image
                    alt="Card background"
                    removeWrapper
                    className="w-full object-cover rounded-xl"
                    src={characteristic.image}
                    height={250}
                />
            </CardHeader>
            <CardBody className="overflow-visible py-2 text-center">
                <Heading className="text-4xl mb-0">
                    {characteristic.title}
                </Heading>
                <span className="text-sm">{characteristic.desc}</span>
            </CardBody>
        </Card>
    );
};

export default MBTIPage;
