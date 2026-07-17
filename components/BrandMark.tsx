export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.7 7.2c-4.2-3.1-11-2.5-14.3 1.2-3.7 4.2-1.4 8.4 4.9 11.2l5.2 2.3c4.3 1.9 5.7 5 3.1 8-3.1 3.6-10 4.2-14.9.6"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinecap="round"
      />
      <path
        d="M34 9.4c-4.1-3-10.4-2.4-13.5 1-3.5 3.9-1.3 7.8 4.6 10.4l4.9 2.2c4 1.8 5.4 4.8 2.9 7.6-2.9 3.3-9.3 3.9-13.8.6"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinecap="round"
        opacity=".7"
      />
      <path d="M9 34.5h26" stroke="currentColor" strokeWidth="1" opacity=".34" />
    </svg>
  );
}
