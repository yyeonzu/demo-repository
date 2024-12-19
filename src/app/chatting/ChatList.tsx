export default function ChatList() {
    const messages = [
        { id: 1, user: 'Alice', message: 'Hello!' },
        { id: 2, user: 'Bob', message: 'Hi Alice!' },
    ];

    return (
        <div className="flex-grow overflow-y-auto p-4 bg-gray-100">
            {messages.map((msg) => (
                <div key={msg.id} className="p-2 bg-white shadow mb-2 rounded">
                    <p className="font-bold">{msg.user}</p>
                    <p>{msg.message}</p>
                </div>
            ))}
        </div>
    );
}
