import InfoList from "../InfoList";
import Heading from "../Heading";
import JobItem from "./JobItem";
import { v4 } from "uuid";
import { Button, Link } from "@nextui-org/react";
import JobItemSkeleton from "./JobItemSkeleton";
import useLoading from "../../hooks/useLoading";
import { JOBS } from "../../utils/fake-jobs";

const JobDetailInfo = ({
    desc,
    requirements,
    benefits,
}: {
    desc: string[];
    requirements: string[];
    benefits: string[];
}) => {
    const { isLoading } = useLoading();

    return (
        <div className="container">
            <div className="px-14 grid grid-cols-[2fr_1fr] gap-20">
                <div className="flex items-start gap-5 flex-col">
                    <InfoList title="Mô tả Công việc" array={desc} />
                    <InfoList title="Yêu Cầu Công Việc" array={requirements} />
                    <InfoList title="Quyền lợi" array={benefits} />
                </div>
                <div>
                    <Heading>Gợi ý công việc</Heading>
                    <div className="flex flex-col gap-5">
                        {isLoading ? (
                            <>
                                <JobItemSkeleton />
                                <JobItemSkeleton />
                                <JobItemSkeleton />
                            </>
                        ) : (
                            <>
                                {JOBS.slice(0, 5).map((job) => (
                                    <JobItem key={v4()} job={job} />
                                ))}
                            </>
                        )}
                    </div>
                    <div className="text-center mt-5">
                        <Button
                            color="primary"
                            variant="bordered"
                            as={Link}
                            href="/viec-lam"
                            className="font-semibold"
                        >
                            Xem tất cả
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailInfo;
