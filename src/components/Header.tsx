interface HeaderProps {
  logoSrc: string;
  altText: string;
}

export default function Header({ logoSrc, altText }: HeaderProps) {

  const handleBackClick = () => {
    alert("back btn");
  };

  return (
    <header className="flex items-center justify-start px-4 py-2">
      {/* Backspace 버튼 */}
      <button
        onClick={handleBackClick}
        className="flex items-center justify-center p-2 rounded-full text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#9747FF"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* 로고 */}
      <img src={logoSrc} alt={altText} className="h-4 w-auto" />
    </header>
  );
}
