import { v4 } from "uuid";
import Heading from "../components/Heading";
import JobItem from "../components/job/JobItem";
import { Pagination, Spacer } from "@nextui-org/react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import JobQuickView from "../components/job/JobQuickView";
import JobItemSkeleton from "../components/job/JobItemSkeleton";
import useLoading from "../hooks/useLoading";
import { JOBS } from "../utils/fake-jobs";
import { IJob } from "../types";

const LIMIT = 5;

const JobPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || LIMIT);
    const query = searchParams.get("query");
    const location = searchParams.get("location");
    const [currentJob, setCurrentJob] = useState<IJob>();

    const { isLoading } = useLoading();
    // const filteredJobs = JOBS.slice((page - 1) * limit, page * limit);
    const filteredJobs = JOBS.filter((job) => {
        if (query) {
            if (!job.title.toLowerCase().includes(query.toLowerCase()))
                return false;
        }
        if (location) {
            if (!job.location.toLowerCase().includes(location.toLowerCase()))
                return false;
        }
        return true;
    });
    const paginationJobs = filteredJobs.slice((page - 1) * limit, page * limit);
    const totalPage = Math.ceil(filteredJobs.length / limit);

    useEffect(() => {
        window.scrollTo({ top: 0 });
        setCurrentJob(undefined);
    }, [page, limit]);

    if (isLoading)
        return (
            <div className="container flex flex-col gap-5 mb-10">
                <JobItemSkeleton />
                <JobItemSkeleton />
                <JobItemSkeleton />
            </div>
        );

    return (
        <div className="container">
            <Heading>Đề xuất công việc</Heading>
            {paginationJobs.length > 0 ? (
                <div
                    className={`grid ${
                        currentJob
                            ? "lg:grid-cols-2 grid-cols-1"
                            : "grid-cols-1"
                    } items-start gap-5`}
                >
                    <div className="flex flex-col gap-5">
                        {paginationJobs.map((job) => (
                            <JobItem
                                key={v4()}
                                job={job}
                                showDetail
                                setCurrentJob={setCurrentJob}
                            />
                        ))}
                    </div>
                    {currentJob && <JobQuickView job={currentJob as IJob} />}
                </div>
            ) : (
                <p className="text-primary">Không tìm thấy công việc phù hợp</p>
            )}
            {totalPage > 1 && (
                <div className="pt-10 flex items-center justify-center">
                    <Pagination
                        isCompact
                        showControls
                        total={totalPage}
                        initialPage={1}
                        classNames={{
                            wrapper: "gap-2 shadow-none",
                        }}
                        page={page}
                        onChange={(page) => {
                            const newSearchParams = {
                                ...Object.fromEntries(searchParams.entries()),
                                page: page.toString(),
                                limit: limit.toString(),
                            };
                            setSearchParams(newSearchParams);
                        }}
                    />
                </div>
            )}
            <Spacer y={10} />
        </div>
    );
};

export default JobPage;
