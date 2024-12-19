export default function Spinner() {
  return (
    <div className="flex justify-center items-center my-4 p-2">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500"></div>
      <div className="ml-2 text-gray-500">찾는 중...</div>
    </div>
  );
}
