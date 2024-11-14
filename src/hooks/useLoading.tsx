import { useEffect, useState } from "react";

export default function useLoading(time: number = 1500) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, time);
        return () => {
            clearTimeout(timeout);
        };
    }, [isLoading]);
    return { isLoading, setIsLoading };
}
