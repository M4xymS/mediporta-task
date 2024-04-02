import {useRef} from "react";


const useDebounce = <T>(callback: (args: T) => void, delay: number) => {
    const timerRef = useRef<NodeJS.Timeout>();

    return (args: T) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            callback(args);
        }, delay);
    }
}

export default useDebounce