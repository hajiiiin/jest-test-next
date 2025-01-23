/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Tailwind가 적용될 파일 경로
  ],
  theme: {
    extend: {}, // 사용자 정의 스타일 추가 가능
  },
  plugins: [], // 추가 플러그인을 여기 등록
};
