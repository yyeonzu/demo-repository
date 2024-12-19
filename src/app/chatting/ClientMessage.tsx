export default function ClientMessage({ message }: { message: string }) {
  return (
    <div className="flex justify-end">
      <div className="rounded-full bg-purple-500 px-4 py-2 text-white shadow-md max-w-xs">
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}