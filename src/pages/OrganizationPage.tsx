import Heading from "../components/Heading";
import {
    BriefcaseBusiness,
    CircleDollarSign,
    Lightbulb,
    MapPin,
    TriangleAlert,
    UserRound,
    UsersRound,
} from "lucide-react";
import OutsideInput from "../components/OutsideInput";
import OutsideTextArea from "../components/OutsideTextArea";
import InfoList from "../components/InfoList";
import SuccessMessageModal from "../components/SuccessMessageModal";
import { Button, useDisclosure } from "@nextui-org/react";

const warnings = [
    "Tiêu đề tin phải thể hiện đúng vị trí tuyển dụng, viết đúng chính tả, viết đúng quy định.",
    "Nội dung tin đầy đủ thông tin thể hiện rõ mô tả công việc, yêu cầu công việc và quyền lợi của ứng viên Nội dung tin tuyển dụng hải phù hợp với ngành nghề tuyển dụng. Khách hàng có nghĩa vụ điền đầy đủ thông tin vào các trường thông tin theo đúng yêu cầu của trang: Ngành, Kỹ năng công việc, Mô tả công việc, Yêu cầu công việc, Quyền lợi ứng viên… Không được bỏ sót bất kỳ mục thông tin nào.",
    "Không được đăng tin với hình thức dùng một tài khoản để đăng tin cho các công ty khác, để thông tin liên hệ của các công ty khác nhau.",
    "Từ chối hợp tác với nhà tuyển dụng có dấu hiệu bất thường.",
];

const OrganizationPage = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className="container">
            <Heading className="text-center">Đăng tin tuyển dụng</Heading>
            <div className="grid grid-cols-2 gap-x-20 gap-y-10 py-5">
                <OutsideInput
                    label="Mức lương"
                    icon={CircleDollarSign}
                    placeholder="Nhập mức lương"
                />
                <OutsideInput
                    icon={UsersRound}
                    label="Số lượng tuyển"
                    placeholder="Nhập số lượng tuyển"
                />
                <OutsideInput
                    icon={BriefcaseBusiness}
                    label="Hình thức làm việc"
                    placeholder="Nhập hình thức làm việc"
                />
                <OutsideInput
                    icon={MapPin}
                    label="Cấp bậc"
                    placeholder="Nhập cấp bậc"
                />
                <OutsideInput
                    icon={UserRound}
                    label="Giới tính"
                    placeholder="Nhập giới tính"
                />
                <OutsideInput
                    icon={Lightbulb}
                    label="Kinh nghiệm"
                    placeholder="Nhập kinh nghiệm"
                />
            </div>
            <div className="grid grid-cols-1 gap-5 py-5">
                <OutsideTextArea
                    label="Địa điểm công việc:"
                    placeholder="Nhập địa điểm công việc"
                />
                <OutsideTextArea
                    label="Mô tả công việc:"
                    placeholder="Nhập mô tả công việc"
                />
                <OutsideTextArea
                    label="Yêu cầu ứng viên:"
                    placeholder="Nhập yêu cầu ứng viên"
                />
                <OutsideTextArea
                    label="Quyền lợi:"
                    placeholder="Nhập quyền lợi"
                />
            </div>
            <Heading className="flex items-center gap-2 mb-3">
                <TriangleAlert />
                Lưu ý
            </Heading>
            <InfoList array={warnings} listClassName="text-primary" />
            <Button
                fullWidth
                variant="bordered"
                color="secondary"
                size="lg"
                type="reset"
                className="font-semibold mt-10 mb-20"
                onPress={onOpen}
            >
                Đăng tải
            </Button>
            <SuccessMessageModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                title="Đăng tin tuyển dụng thành công"
                buttonText="Xem danh sách công việc đã tạo"
            />
        </div>
    );
};

export default OrganizationPage;
