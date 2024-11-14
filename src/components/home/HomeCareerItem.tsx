import { Image } from "@nextui-org/react";

type TCareer = {
    title: string;
    image: string;
    available: string;
};

const HomeCareerItem = ({ career }: { career: TCareer }) => {
    return (
        <div className="p-5 flex items-center flex-col border border-primary rounded-md cursor-pointer">
            <Image
                alt="Job image"
                height={200}
                src={career.image}
                className="object-cover"
            />
            <h5 className="text-xl font-semibold text-primary">
                {career.title}
            </h5>
            <span className="text-primary">
                ({career.available} vị trí tuyển dụng)
            </span>
        </div>
    );
};

export default HomeCareerItem;
