import { Image } from "@nextui-org/react";
import Heading from "../Heading";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const recruiterList = [
    "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507490/hoa-sen-company_d3jemm.png",
    "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507493/vinhomes-company_iybuae.webp",
    "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507492/vib-bank-company_mngzwu.png",
    "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507493/vua-nem-company_ztmael.png",
    "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507491/lof-company_myubwp.png",
    "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507489/con-cung-company_etllay.png",
    "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507492/ofi-company_egayaw.png",
    "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507493/vietnet-company_lv9kcr.png",
];

const HomeFeaturedRecruiters = () => {
    return (
        <div className="bg-gradient-to-l from-[#270052] to-[#2D3077] py-7 px-14 rounded-md">
            <Heading className="text-white">Nhà tuyển dụng tiêu biểu</Heading>
            <Swiper
                slidesPerView={5}
                // slidesPerGroup={5}
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
                {recruiterList.map((recruiter) => (
                    <SwiperSlide
                        key={v4()}
                        className="bg-white !h-auto !grid place-items-center rounded-md p-5"
                    >
                        <Image
                            alt="Recruiter image"
                            className="object-cover select-none"
                            src={recruiter}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeFeaturedRecruiters;
