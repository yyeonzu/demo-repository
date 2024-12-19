type MainCardProps = {
    title: string;
    description: string;
};

export default function MainCard({ title, description }: MainCardProps) {
    return (
        <div className="p-4 bg-white shadow rounded mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{description}</p>
        </div>
    );
}
