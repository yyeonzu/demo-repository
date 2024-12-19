type ButtonOptionProps = {
    label: string;
    onClick: () => void;
};

export default function ButtonOption({ label, onClick }: ButtonOptionProps) {
    return (
        <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow hover:bg-gray-100"
        onClick={onClick}>
            {label}
        </button>
    );
}
