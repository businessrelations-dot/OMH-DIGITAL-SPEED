export default function SEOIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="currentColor" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
      <path d="M8.25 8.25V6a2.25 2.25 0 014.5 0v2.25a.75.75 0 01-1.5 0V6a.75.75 0 00-1.5 0v2.25a.75.75 0 01-1.5 0z" />
    </svg>
  );
}
