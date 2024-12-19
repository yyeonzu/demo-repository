import React,{ useState } from 'react';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSendMessage(inputValue);
            setInputValue('');
        }
    };

    return (
        <form className="fixed bottom-0 left-0 right-0 p-4"
        onSubmit={handleSubmit}>
            <div className="relative">
                <input
                    type="text"
                    id="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="메세지 입력"
                    className="w-full rounded-full border border-gray-300 bg-white p-4 ps-5 text-gray-900 shadow focus:border-purple-300 focus:ring-purple-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button
                    type="submit"
                    className="absolute end-2.5 bottom-2 p-2 flex items-center justify-center rounded-full bg-purple-600 text-white shadow hover:bg-purple-700 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 12h16.5m0 0l-6.75 6.75M20.25 12l-6.75-6.75"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
}
