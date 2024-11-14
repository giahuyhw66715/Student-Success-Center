import { Button, Image } from "@nextui-org/react";
import { User } from "lucide-react";

type ApplicantProps = {
    name: string;
    job: string;
    image?: string;
};

const HomeCVApplicant = ({ applicant }: { applicant: ApplicantProps }) => {
    return (
        <div className="bg-white rounded-xl p-5 flex items-center flex-col h-full">
            {applicant.image ? (
                <Image
                    width={200}
                    height={200}
                    alt="NextUI hero Image"
                    className="object-cover mb-3 object-top border border-gray-300"
                    src={applicant.image}
                    radius="full"
                />
            ) : (
                <User className="w-48 h-48" />
            )}
            <h4 className="text-3xl my-2 font-semibold text-center">
                {applicant.name}
            </h4>
            <span className="text-sm">{applicant.job}</span>
            <Button variant="bordered" color="default" className="mt-5">
                Xem CV
            </Button>
        </div>
    );
};

export default HomeCVApplicant;
