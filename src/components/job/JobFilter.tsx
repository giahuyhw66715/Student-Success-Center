import {
    Autocomplete,
    AutocompleteItem,
    Button,
    Input,
    Select,
    SelectItem,
} from "@nextui-org/react";
import { BriefcaseBusiness, MapPin, Search } from "lucide-react";
import Icon from "../Icon";
import { v4 } from "uuid";
import { State } from "country-state-city";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const availableJobs = [
    "IT - Phần mềm",
    "Quản trị kinh doanh",
    "Biên dịch, phiên dịch, ngoại ngữ",
    "Y tế, sức khỏe, làm đẹp",
    "Marketing, truyền thông, quảng cáo",
    "Giáo dục, đào tạo",
    "Kiến trúc, xây dựng",
    "Nhà hàng khách sạn / Du lịch",
];

const salarys = [
    "Thỏa thuận",
    "1.000.000 - 2.000.000",
    "2.000.000 - 3.000.000",
    "Trên 5 triệu",
];
const workingForms = ["Full-time", "Part-time"];
const ranks = ["Intern", "Junior", "Middle", "Senior", "Leader"];
const experiences = [
    "Chưa có kinh nghiệm",
    "Dưới 1 năm",
    "2 - 3 năm",
    "trên 5 năm",
];

const JobFilter = () => {
    const states = State.getStatesOfCountry("VN");
    const queryRef = React.useRef<HTMLInputElement>(null);
    const locationRef = React.useRef<HTMLInputElement>(null);
    const [searchParams] = useSearchParams();
    const currentQuery = searchParams.get("query");
    const currentLocation = searchParams.get("location");
    const navigate = useNavigate();

    return (
        <div className="my-5 py-10 border-t border-b">
            <div className="flex items-stretch justify-center gap-3">
                <Input
                    key={v4()}
                    placeholder="Truyền thông, marketing"
                    size="lg"
                    color="primary"
                    className="w-fit"
                    variant="bordered"
                    ref={queryRef}
                    defaultValue={currentQuery || ""}
                    startContent={<Icon icon={Search} />}
                />
                <Autocomplete
                    placeholder="Tất cả tỉnh thành"
                    aria-label="Tất cả tỉnh thành"
                    size="lg"
                    color="primary"
                    className="w-fit"
                    variant="bordered"
                    ref={locationRef}
                    defaultItems={states}
                    defaultSelectedKey={currentLocation || ""}
                    startContent={<Icon icon={MapPin} />}
                >
                    {(item) => (
                        <AutocompleteItem key={item.name}>
                            {item.name}
                        </AutocompleteItem>
                    )}
                </Autocomplete>
                <Autocomplete
                    placeholder="Tất cả loại công việc"
                    aria-label="Tất cả loại công việc"
                    size="lg"
                    color="primary"
                    className="w-fit"
                    variant="bordered"
                    startContent={<Icon icon={BriefcaseBusiness} />}
                >
                    {availableJobs.map((job) => (
                        <AutocompleteItem key={v4()} value={job}>
                            {job}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
                <Button
                    color="secondary"
                    size="lg"
                    className="font-semibold"
                    onClick={() => {
                        navigate(
                            `/viec-lam?query=${queryRef.current?.value}&location=${locationRef.current?.value}`
                        );
                    }}
                >
                    Tìm kiếm
                </Button>
            </div>
            <div className="flex items-center gap-5 justify-center mt-5">
                <Select
                    color="primary"
                    variant="bordered"
                    label="Mức lương"
                    className="max-w-xs"
                >
                    {salarys.map((salary) => (
                        <SelectItem key={salary}>{salary}</SelectItem>
                    ))}
                </Select>
                <Select
                    color="primary"
                    variant="bordered"
                    label="Hình thức làm việc"
                    className="max-w-xs"
                >
                    {workingForms.map((item) => (
                        <SelectItem key={item}>{item}</SelectItem>
                    ))}
                </Select>
                <Select
                    color="primary"
                    variant="bordered"
                    label="Cấp bậc"
                    className="max-w-xs"
                >
                    {ranks.map((rank) => (
                        <SelectItem key={rank}>{rank}</SelectItem>
                    ))}
                </Select>
                <Select
                    color="primary"
                    variant="bordered"
                    label="Kinh nghiệm làm việc"
                    className="max-w-xs"
                >
                    {experiences.map((experience) => (
                        <SelectItem key={experience}>{experience}</SelectItem>
                    ))}
                </Select>
            </div>
        </div>
    );
};

export default JobFilter;
