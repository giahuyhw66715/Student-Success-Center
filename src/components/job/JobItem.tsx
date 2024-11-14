import { Button, Image, Link, Tooltip } from "@nextui-org/react";
import {
    Bookmark,
    ChevronsRight,
    CircleDollarSign,
    Clock,
    MapPin,
} from "lucide-react";
import { IJob } from "../../types";
import React, { useState } from "react";
import slugify from "../../utils/slugify";
import InfoWithIcon from "../InfoWithIcon";

const JobItem = ({
    job,
    showDetail = false,
    setCurrentJob,
}: {
    job: IJob;
    showDetail?: boolean;
    setIsQuickView?: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentJob?: React.Dispatch<React.SetStateAction<IJob | undefined>>;
}) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    return (
        <div className="border border-primary p-4 flex items-stretch xl:flex-row flex-col gap-5 rounded-md h-full hover:border-success-500 transition-colors cursor-pointer group">
            <div className="border border-primary p-5 rounded-lg flex items-center justify-center">
                <Link href={`/viec-lam/${slugify(job.title)}`}>
                    <Image
                        alt="Job image"
                        width={80}
                        className="h-full object-cover flex-shrink-0"
                        src={job.image}
                    />
                </Link>
            </div>
            <div className="flex-1">
                <Tooltip content={job.title}>
                    <Link
                        href={`/viec-lam/${slugify(job.title)}`}
                        className="text-base text-secondary font-semibold !line-clamp-1 group-hover:text-success-500 transition-all border-b border-transparent group-hover:border-success-500 w-fit"
                    >
                        {job.title}
                    </Link>
                </Tooltip>
                <h4 className="text-sm text-primary font-semibold mb-2 line-clamp-1">
                    {job.company}
                </h4>
                <div className="flex flex-col gap-2">
                    <InfoWithIcon icon={MapPin}>{job.location}</InfoWithIcon>
                    <InfoWithIcon icon={CircleDollarSign}>
                        Mức lương: {job.salary}
                    </InfoWithIcon>
                    <InfoWithIcon icon={Clock}>
                        Hạn nộp: {job.deadline}
                    </InfoWithIcon>
                </div>
            </div>
            {showDetail && (
                <div className="flex flex-col items-end gap-3">
                    <div className="flex gap-2">
                        <Button
                            color="primary"
                            className="font-semibold xl:block hidden"
                            size="sm"
                        >
                            Ứng tuyển
                        </Button>
                        <Button
                            isIconOnly
                            color="primary"
                            size="sm"
                            onClick={() => setIsBookmarked(!isBookmarked)}
                        >
                            <Bookmark
                                fill={isBookmarked ? "yellow" : "white"}
                                className="w-4 h-4"
                            />
                        </Button>
                    </div>
                    <Button
                        color="success"
                        className="font-semibold xl:inline-flex hidden"
                        variant="flat"
                        size="sm"
                        endContent={<ChevronsRight className="w-3 h-3" />}
                        onClick={() => setCurrentJob?.(job)}
                    >
                        Xem nhanh
                    </Button>
                </div>
            )}
        </div>
    );
};

export default JobItem;
