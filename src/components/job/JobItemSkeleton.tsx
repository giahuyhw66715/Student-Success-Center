import { Skeleton } from "@nextui-org/react";

const JobItemSkeleton = () => {
    return (
        <div className="border border-primary p-4 flex items-stretch xl:flex-row flex-col gap-5 rounded-md h-full">
            <div className="border border-primary p-5 rounded-lg flex items-center justify-center">
                <Skeleton className="rounded-lg h-20 w-20"></Skeleton>
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <Skeleton className="rounded-lg w-1/2 h-4" />
                <Skeleton className="rounded-lg w-1/3 h-4" />
                <Skeleton className="rounded-lg w-1/4 h-4" />
                <Skeleton className="rounded-lg w-1/4 h-4" />
                <Skeleton className="rounded-lg w-1/4 h-4" />
            </div>
        </div>
    );
};

export default JobItemSkeleton;
