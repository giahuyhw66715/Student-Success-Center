import JobItem from "../job/JobItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import { v4 } from "uuid";
import { IJob } from "../../types";
import JobItemSkeleton from "./JobItemSkeleton";

const JobList = ({
    jobs,
    isLoading,
}: {
    jobs?: IJob[];
    isLoading?: boolean;
}) => {
    if (isLoading)
        return (
            <div className="grid grid-cols-3 gap-8">
                <JobItemSkeleton />
                <JobItemSkeleton />
                <JobItemSkeleton />
            </div>
        );
    return (
        <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
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
            {jobs?.map((job) => (
                <SwiperSlide key={v4()} className="!h-auto">
                    <JobItem job={job} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default JobList;
