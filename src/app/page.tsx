import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold mb-6">Welcome to My App</h1>
            <div className="flex gap-4">
                <Link href="/main" className="btn btn-primary">
                    Go to Main
                </Link>
                <Link href="/chatting" className="btn btn-secondary">
                    Go to Chatting
                </Link>
            </div>
        </div>
    );
}
