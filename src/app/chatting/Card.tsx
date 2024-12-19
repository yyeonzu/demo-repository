interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
};

export default function Card({ title, description, buttonText, onButtonClick }: CardProps) {
  return (
    <div className="flex flex-col justify-center items-center p-4 space-y-2 bg-white rounded-lg shadow-md w-60">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <button
        onClick={onButtonClick}
        className="w-fit self-end rounded bg-purple-400 px-8 py-2 text-white shadow hover:bg-purple-700"
      >
        {buttonText}
      </button>
    </div>
  );
}