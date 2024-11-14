import {
    Ellipsis,
    LucideProps,
    MessageSquareMore,
    UserRound,
} from "lucide-react";
import Icon from "./Icon";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Input,
} from "@nextui-org/react";
import { KeyboardEvent, useState } from "react";
import { v4 } from "uuid";

type Message = {
    text: string;
    type: "user" | "bot";
};

const HelperBot = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentMessage, setCurrentMessage] = useState<string>("");

    const handleSendMessage = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setMessages((prev) => [
                ...prev,
                { text: currentMessage, type: "user" },
            ]);
            setTimeout(() => {
                setMessages((prev) => [
                    ...prev,
                    {
                        text: "Chúng tôi đã nhận tin nhắn của bạn và sẽ phản hồi trong thời gian ngắn",
                        type: "bot",
                    },
                ]);
            }, 1000);
            setCurrentMessage("");
        }
    };

    return (
        <div className="fixed bottom-10 right-10 flex flex-col gap-3 z-50">
            <BotItem icon={Ellipsis} />
            <BotItem icon={MessageSquareMore} onClick={onOpen} />
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="md"
                scrollBehavior="inside"
                className="min-h-[500px]"
            >
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Trung tâm hỗ trợ
                        </ModalHeader>
                        <ModalBody>
                            <div className="flex flex-col gap-2 text-sm font-medium">
                                {messages.length > 0 &&
                                    messages.map((message) => (
                                        <UserMessage
                                            key={v4()}
                                            isUser={message.type === "user"}
                                        >
                                            {message.text}
                                        </UserMessage>
                                    ))}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <div className="flex items-center gap-5 w-full">
                                <UserRound />
                                <Input
                                    variant="bordered"
                                    placeholder="Nhập tin nhắn của bạn"
                                    onKeyDown={handleSendMessage}
                                    value={currentMessage}
                                    onChange={(e) =>
                                        setCurrentMessage(e.target.value)
                                    }
                                />
                            </div>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </div>
    );
};

const BotItem = ({
    icon,
    onClick = () => {},
}: {
    icon: React.FC<LucideProps>;
    onClick?: () => void;
}) => {
    return (
        <div
            className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center cursor-pointer"
            onClick={onClick}
        >
            <Icon icon={icon} className="w-6 h-6 text-white" />
        </div>
    );
};

const UserMessage = ({
    isUser,
    children,
}: {
    isUser?: boolean;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={`rounded-xl p-3 w-1/2 ${
                isUser ? "ml-auto bg-primary" : "bg-secondary bg-opacity-80"
            } text-white`}
        >
            {children}
        </p>
    );
};

export default HelperBot;
