import InfoWithIcon from "../InfoWithIcon";
import { CircleDollarSign, Clock, MapPin } from "lucide-react";

const JobDetailBasicInfo = ({
    deadline,
    salary,
    location,
}: {
    deadline: string;
    salary: string;
    location: string;
}) => {
    return (
        <div className="grid grid-cols-[30%_70%] gap-5 p-5 border border-gray-400 rounded-xl">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.4552493103047!2d106.69073157486888!3d10.762764359445944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f16ad86371b%3A0x949d258c9508b1f2!2sVan%20Lang%20University%20-%20Campus%201!5e1!3m2!1sen!2s!4v1731468620738!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                className="border-0 rounded-xl w-full h-[250px]"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex flex-col gap-5">
                <InfoWithIcon size="lg" icon={Clock}>
                    <strong>Hạn nộp:</strong> {deadline}
                </InfoWithIcon>
                <InfoWithIcon size="lg" icon={CircleDollarSign}>
                    <strong>Mức lương:</strong> {salary}
                </InfoWithIcon>
                <InfoWithIcon size="lg" icon={MapPin}>
                    <strong>Địa chỉ:</strong> {location}
                </InfoWithIcon>
                {/* <InfoWithIcon size="lg" icon={BriefcaseBusiness}>
                    <strong>Ngành nghề:</strong> Nhân sự ,Truyền hình / Báo chí
                    / Biên tập
                </InfoWithIcon> */}
            </div>
        </div>
    );
};

export default JobDetailBasicInfo;
