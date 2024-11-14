import { v4 } from "uuid";
import Heading from "../Heading";
import HomeCareerHandbookItem from "./HomeCareerHandbookItem";

const careerHandbookList = [
    {
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507485/career-handbook1_stm6gj.jpg",
        title: "Đa cấp là gì? Phân biệt kinh doanh đa cấp hợp pháp và bất hợp pháp",
        tags: ["Kĩ năng", "Thị trường"],
        href: "https://fptshop.com.vn/tin-tuc/danh-gia/da-cap-la-gi-180768",
    },
    {
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507490/career-handbook2_urwriq.jpg",
        title: "Timeline là gì? Hướng dẫn cách xây dựng timeline trong công việc",
        tags: ["Kĩ năng", "Phát triển bản thân"],
        href: "https://careerviet.vn/vi/talentcommunity/timeline-la-gi-huong-dan-cach-xay-dung-timeline-trong-cong-viec.35A527E9.html",
    },
    {
        image: "https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507487/career-handbook3_r576hf.jpg",
        title: "Animation là gì? Những điều cần biết về ngành animation",
        tags: ["Thị trường", "Sự nghiệp"],
        href: "https://careerviet.vn/vi/talentcommunity/animation-la-gi-nhung-dieu-can-biet-ve-nganh-animation.35A527EE.html",
    },
];
const HomeCareerHandbook = () => {
    return (
        <div className="py-7 px-14">
            <Heading className="text-black">Cẩm nang nghề nghiệp</Heading>
            <div className="grid grid-cols-3 gap-5">
                {careerHandbookList.map((careerHandbook) => (
                    <HomeCareerHandbookItem
                        key={v4()}
                        careerHandbook={careerHandbook}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomeCareerHandbook;
