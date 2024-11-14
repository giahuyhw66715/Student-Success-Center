import Heading from "../components/Heading";
import InfoList from "../components/InfoList";
import { Image } from "@nextui-org/react";
import JobList from "../components/job/JobList";
import useLoading from "../hooks/useLoading";
import { JOBS } from "../utils/fake-jobs";

const overview = [
    "Những người thuộc nhóm tính cách ENFJ sẽ có khả năng tác động mạnh mẽ tới những người xung quanh thông qua cả hành động lẫn lời nói. Dù là những người có sự tham vọng nhưng bản thân những người thuộc nhóm tính cách này lại không hề tư lợi, mà luôn hướng đến mục tiêu và lợi ích chung.",
    "Khả năng thấu hiểu và đồng cảm mạnh mẽ khiến các ENFJ tỏa sáng trong những lĩnh vực liên quan tới con người",
];

const meanings = [
    "Extraverted - Hướng ngoại: Bạn là một người hoạt bát và tập trung vào thế giới và các mối quan hệ xung quanh. Trái ngược, với những bạn hướng nội, luôn đắm chìm trong thế giới riêng của bản thân",
    "iNtuitive - Trực giác: Bạn sẽ có xu hướng bị thu hút bơi ý nghĩa hoặc bản chất của sự việc, thay vì sử dụng các giác quan của bản thân để nhìn nhận và đưa ra đánh giá.",
    "Feeling - Cảm xúc: Các quyết định của bạn chủ yếu là dựa trên cảm nhận của bản thân. Ngược lại, những người có tính cách T - Lý trí lại đưa ra quyết định dựa vào những bằng chứng chính xác.",
    "Judging - Nguyên tắc: Bạn dựa vào cấu trúc sẵn có để thoải mái đưa ra quan điểm mà không phải mất công suy xét nhiều.",
];
const MBTIResultPage = () => {
    const { isLoading } = useLoading();

    return (
        <div className="container mb-10">
            <Heading className="text-center text-4xl py-10">
                Tính cách của bạn là: ENFJ-Người cho đi
            </Heading>
            <Heading className="mb-3">Tổng quan</Heading>
            <div className="grid grid-cols-[70%_30%] gap-8">
                <InfoList array={overview} listClassName="text-primary" />
                <Image
                    src="https://res.cloudinary.com/dti7dy6rm/image/upload/v1731511391/image1-1683886516616340019752_qusa3h.webp"
                    className="w-full max-h-[250px] object-cover"
                    removeWrapper
                    alt="Image"
                />
            </div>
            <Heading className="my-3">Ý nghĩa ENFJ</Heading>
            <InfoList array={meanings} listClassName="text-primary" />
            <Heading className="my-5">
                Đề xuất công việc phù hợp dành cho: ENFJ{" "}
            </Heading>
            <JobList jobs={JOBS} isLoading={isLoading} />
        </div>
    );
};

export default MBTIResultPage;
