import MainCard from '@/app/main/MainCard';

export default function MainPage() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Main Page</h1>
            <MainCard title="Card 1" description="This is the first card." />
            <MainCard title="Card 2" description="This is the second card." />
        </div>
    );
}
