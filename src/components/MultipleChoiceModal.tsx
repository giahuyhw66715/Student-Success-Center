import {
    Button,
    Link,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
} from "@nextui-org/react";
import { useState } from "react";
import { v4 } from "uuid";
import Heading from "./Heading";
import { Circle } from "lucide-react";

type TResponse = {
    question: string;
    answer: string;
};

const questions = [
    {
        question: "1. Bạn cảm thấy thoải mái hơn khi:",
        answers: [
            "A: Ở một bữa tiệc đông người.",
            "B: Ở nhà một mình đọc sách.",
        ],
    },
    {
        question: "2. Khi gặp vấn đề, bạn thường:",
        answers: [
            "A: Tìm lời khuyên từ người khác.",
            "B: Suy nghĩ và giải quyết vấn đề một mình.",
        ],
    },
    {
        question: "3. Bạn thích làm việc:",
        answers: [
            "A: Theo kế hoạch cụ thể.",
            "B: Linh hoạt và thích ứng với tình huống.",
        ],
    },
    {
        question: "4. Trong cuộc trò chuyện, bạn thích:",
        answers: [
            "A: Nói về các sự kiện và chi tiết cụ thể.",
            "B: Thảo luận về ý tưởng và lý thuyết.",
        ],
    },
    {
        question: "5. Bạn đánh giá cao hơn:",
        answers: [
            "A: Hiện tại và thực tế.",
            "B: Tương lai và khả năng tiềm ẩn.",
        ],
    },
];

const MultipleChoiceModal = ({
    isOpen,
    onOpenChange,
}: {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}) => {
    const [selectedAnswers, setSelectedAnswers] = useState<TResponse[]>([]);
    const [index, setIndex] = useState(0);
    const currentQuestion = questions[index];

    const handleAddAnswer = (currentQuestion: string, answer: string) => {
        setSelectedAnswers((prev) => {
            if (prev.some((item) => item.question === currentQuestion)) {
                return prev.map((item) =>
                    item.question === currentQuestion
                        ? { ...item, answer }
                        : item
                );
            } else {
                return [...prev, { question: currentQuestion, answer }];
            }
        });
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
            <ModalContent>
                <>
                    <ModalBody className="py-5">
                        <div key={v4()}>
                            <Heading className="text-lg">
                                {currentQuestion?.question}
                            </Heading>
                            <div className="grid grid-cols-2 gap-5">
                                {currentQuestion?.answers.map((answer) => (
                                    <div
                                        key={v4()}
                                        className={`${
                                            selectedAnswers
                                                .map((item) => item.answer)
                                                .includes(answer)
                                                ? "bg-success-50"
                                                : ""
                                        } border border-black px-6 py-4 rounded-xl flex items-center gap-2 cursor-pointer`}
                                        onClick={() =>
                                            handleAddAnswer(
                                                currentQuestion.question,
                                                answer
                                            )
                                        }
                                    >
                                        <Circle
                                            className={`w-4 h-4 ${
                                                selectedAnswers
                                                    .map((item) => item.answer)
                                                    .includes(answer)
                                                    ? "fill-success-500 text-success-500"
                                                    : ""
                                            }`}
                                        />
                                        {answer}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            variant="bordered"
                            fullWidth
                            radius="full"
                            onClick={() => setIndex(index - 1)}
                            isDisabled={index === 0}
                        >
                            Câu trước
                        </Button>
                        {index === questions.length - 1 ? (
                            <Button
                                href="/cv/ket-qua-trac-nghiem-mbti"
                                as={Link}
                                color="primary"
                                variant="solid"
                                fullWidth
                                radius="full"
                                isDisabled={
                                    selectedAnswers.length !== questions.length
                                }
                            >
                                Hoàn thành
                            </Button>
                        ) : (
                            <Button
                                color="primary"
                                fullWidth
                                radius="full"
                                onClick={() => setIndex(index + 1)}
                            >
                                Câu tiếp theo
                            </Button>
                        )}
                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>
    );
};

export default MultipleChoiceModal;
