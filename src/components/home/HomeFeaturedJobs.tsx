import Heading from "../Heading";
import JobList from "../job/JobList";
import { JOBS } from "../../utils/fake-jobs";
import useLoading from "../../hooks/useLoading";

const HomeFeaturedJobs = () => {
    const { isLoading } = useLoading();

    return (
        <div className="py-8 px-14">
            <Heading>Việc làm nổi bật</Heading>
            <JobList jobs={JOBS} isLoading={isLoading} />
        </div>
    );
};

export default HomeFeaturedJobs;
