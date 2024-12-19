import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
      "next",
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended"
  ),
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    rules: {
      // Next.js 추천 규칙 비활성화
      "react/react-in-jsx-scope": "off", // Next.js에서는 React import 불필요
      "@next/next/no-img-element": "off", // 기본 img 태그 허용

      // TypeScript 규칙 완화
      "@typescript-eslint/no-explicit-any": "warn", // any 사용 경고만 표시
      "@typescript-eslint/explicit-function-return-type": "off", // 함수 반환 타입 명시 비활성화

      // 기타 규칙 완화
      "no-console": "warn", // console.log 허용, 경고 표시
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // 사용되지 않은 변수 경고
      "react/prop-types": "off", // PropTypes 비활성화 (TS 사용 시 불필요)
      "import/no-anonymous-default-export": "off", // 익명 default export 허용
    },
  },
];

export default eslintConfig;
