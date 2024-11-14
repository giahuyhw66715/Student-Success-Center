import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@nextui-org/react";
import { CircleCheck } from "lucide-react";
import Heading from "./Heading";

const SuccessMessageModal = ({
    isOpen,
    onOpenChange,
    title,
    buttonText,
}: {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    title: string;
    buttonText: string;
}) => {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="pb-0">
                            <CircleCheck className="w-20 h-20 text-white fill-primary mx-auto" />
                        </ModalHeader>
                        <ModalBody>
                            <Heading className="text-center mb-0">
                                {title}
                            </Heading>
                        </ModalBody>
                        <ModalFooter className="pt-2 pb-7">
                            <Button
                                color="secondary"
                                variant="bordered"
                                onPress={onClose}
                                fullWidth
                                className="font-semibold"
                                size="lg"
                            >
                                {buttonText}
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default SuccessMessageModal;
