import YomiAvatar from "@/components/YomiAvata";


export default function ChatBotMessage({ message }: { message: string }) {
    return (
        <div className="flex-col items-start w-4/5 space-y-4">
            <YomiAvatar />
            <div className="inline-flex w-fit rounded-full bg-white px-4 py-2 shadow-md">
                <p className="text-gray-800">{message}</p>
            </div>
        </div>
    );
}
