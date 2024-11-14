import { v4 } from "uuid";
import Heading from "../Heading";
import HomeCVApplicant from "./HomeCVApplicant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const applicants = [
    {
        name: "Đặng Thành Nhân",
        job: "Truyền thông đa phương tiện",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731558236/a5_obuqyj.jpg",
    },
    {
        name: "Phạm Thị Thu Hiền",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731558242/a3_bow8yf.jpg",
        job: "Truyền thông đa phương tiện",
    },
    {
        name: "Trần Tú Anh",
        job: "Truyền thông đa phương tiện",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731558236/a1_zifccv.jpg",
    },
    {
        name: "Nguyễn Thị Bích Duyên",
        job: "Truyền thông đa phương tiện",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731558237/a4_vncr0s.jpg",
    },
    {
        name: "Nguyễn Duy Anh",
        job: "Truyền thông đa phương tiện",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731558236/a2_ezlhcl.jpg",
    },
    {
        name: "Trần Thanh Ngoan",
        job: "Truyền thông đa phương tiện",
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731558238/a6_znxizw.jpg",
    },
    {
        name: "Nguyễn Lê Hoàng Lâm",
        job: "Truyền thông đa phương tiện",
    },
    {
        name: "Nguyễn Thị Trà My",
        job: "Truyền thông đa phương tiện",
    },
    {
        name: "Phạm Công Thắng",
        job: "Truyền thông đa phương tiện",
    },
];

const HomeTopCV = () => {
    return (
        <div className="bg-gradient-to-l from-[#952F75] to-[#D51F36] rounded-md py-7 px-14">
            <Heading className="text-white text-center text-5xl mb-8">
                Top CV hay
            </Heading>
            <Swiper
                slidesPerView={3}
                slidesPerGroup={3}
                spaceBetween={50}
                loop={true}
                wrapperClass="pb-10"
                grabCursor={true}
                pagination={{
                    clickable: true,
                    bulletClass:
                        "swiper-pagination-bullet !w-10 !h-1 border border-white !rounded-none",
                    bulletActiveClass:
                        "swiper-pagination-bullet-active !bg-white",
                }}
                modules={[Pagination]}
            >
                {applicants?.map((applicant) => (
                    <SwiperSlide key={v4()} className="!h-auto">
                        <HomeCVApplicant key={v4()} applicant={applicant} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeTopCV;
