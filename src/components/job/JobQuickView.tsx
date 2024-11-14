import { v4 } from "uuid";
import Heading from "../Heading";
import Tag from "../Tag";
import { Button, Divider } from "@nextui-org/react";
import InfoList from "../InfoList";
import { IJob } from "../../types";

const JobQuickView = ({ job }: { job: IJob }) => {
    const tagList = [job.salary, job.location, `Hạn nộp: ${job.deadline}`];
    return (
        <div className="lg:block hidden">
            <div className="px-5">
                <Heading className="mb-2">
                    {/* Thực tập sinh Marketing - Thiết kế đồ họa */}
                    {job.title}
                </Heading>
                <div className="flex items-center gap-2">
                    {tagList.map((tag) => (
                        <Tag className="text-primary font-semibold" key={v4()}>
                            {tag}
                        </Tag>
                    ))}
                </div>
                <Button
                    color="success"
                    className="mt-4 text-white font-semibold"
                    fullWidth
                    size="lg"
                >
                    Ứng tuyển ngay
                </Button>
            </div>
            <Divider className="my-5 bg-gray-400" />
            <div className="px-5 flex flex-col gap-5">
                <InfoList title="Mô tả" array={job.desc} />
                <InfoList title="Yêu cầu" array={job.requirements} />
                <InfoList title="Quyền lợi" array={job.benefits} />
            </div>
        </div>
    );
};

export default JobQuickView;
