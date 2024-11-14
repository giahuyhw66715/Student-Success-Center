import { Button, Image, useDisclosure } from "@nextui-org/react";
import Heading from "../components/Heading";
import { Upload } from "lucide-react";
import { useState } from "react";
import OutsideInput from "../components/OutsideInput";
import OutsideTextArea from "../components/OutsideTextArea";
import SuccessMessageModal from "../components/SuccessMessageModal";

const CreateCVPage = () => {
    const [image, setImage] = useState<File>();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <form className="container">
            <Heading className="text-center text-4xl">Tạo CV</Heading>
            <div className="grid grid-cols-[20%_80%] gap-x-5">
                {image ? (
                    <Image
                        src={URL.createObjectURL(image)}
                        alt="Image"
                        removeWrapper
                        className="w-full h-[275px] object-cover object-top"
                    />
                ) : (
                    <label htmlFor="avatar" className="cursor-pointer">
                        <div className="border border-black flex flex-col items-center justify-center gap-3 text-primary font-semibold h-full rounded-xl">
                            <Upload className="w-10 h-10" />
                            Tải ảnh lên
                        </div>
                        <input
                            type="file"
                            name="avatar"
                            id="avatar"
                            className="hidden"
                            onChange={(e) => setImage(e.target.files?.[0])}
                        />
                    </label>
                )}

                <div className="flex-1 flex items-start gap-3 flex-col">
                    <div className="grid grid-cols-2 gap-5 w-full">
                        <OutsideInput
                            label="Họ tên:"
                            placeholder="Nhập họ tên của bạn"
                        />
                        <OutsideInput
                            label="Ngành:"
                            placeholder="Nhập ngành học của bạn"
                        />
                    </div>
                    <OutsideTextArea
                        label="Giới thiệu:"
                        placeholder="Giới thiệu về bản thân bạn"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5 py-10">
                <OutsideTextArea
                    label="Kĩ năng:"
                    placeholder="Các kĩ năng của bạn"
                />
                <OutsideTextArea
                    label="Liên hệ:"
                    placeholder="Cách thức liên hệ với bạn"
                />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 mb-10">
                <div className="row-span-2">
                    <OutsideTextArea
                        label="Kinh nghiệm:"
                        placeholder="Kinh nghiệm làm việc của bạn"
                        inputWrapperClass="!h-full"
                    />
                </div>
                <div>
                    <OutsideTextArea
                        label="Mục tiêu sự nghiệp:"
                        placeholder="Mục tiêu sự nghiệp của bạn"
                    />
                </div>
                <div className="col-start-2">
                    <OutsideTextArea
                        label="Trình độ học vấn:"
                        placeholder="Trình độ học vấn của bạn"
                    />
                </div>
            </div>
            <div className="text-center mb-10">
                <Button
                    color="primary"
                    type="reset"
                    onClick={() => setImage(undefined)}
                    className="font-semibold"
                    size="lg"
                    onPress={onOpen}
                >
                    Hoàn tất
                </Button>
                <SuccessMessageModal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    title="Tạo CV thành công"
                    buttonText="Xem danh sách CV của bạn"
                />
            </div>
        </form>
    );
};

export default CreateCVPage;
