import { Divider, Image, Spacer } from "@nextui-org/react";
import JobDetailBasicInfo from "./JobDetailBasicInfo";
import JobDetailHeader from "./JobDetailHeader";
import JobDetailInfo from "./JobDetailInfo";
import { useParams } from "react-router-dom";
import slugify from "../../utils/slugify";
import { JOBS } from "../../utils/fake-jobs";

const JobDetailPage = () => {
    const { slug } = useParams();
    const currentJob = JOBS.find((job) => slugify(job.title) === slug);
    if (!currentJob) return null;

    return (
        <div>
            <Image
                src="https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507497/vua-nem-banner_emj9jy.png"
                alt="Banner image"
                radius="none"
            />
            <div className="container">
                <JobDetailHeader
                    title={currentJob.title}
                    company={currentJob.company}
                />
                <JobDetailBasicInfo
                    deadline={currentJob.deadline}
                    salary={currentJob.salary}
                    location={currentJob.location}
                />
            </div>
            <Divider className="my-10" />
            <JobDetailInfo
                desc={currentJob.desc}
                requirements={currentJob.requirements}
                benefits={currentJob.benefits}
            />
            <Spacer y={10} />
        </div>
    );
};

export default JobDetailPage;
