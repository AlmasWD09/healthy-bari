type BrandLogoProps = {
  className?: string;
  showTagline?: boolean;
};

export default function BrandLogo({
  className = "",
  showTagline = true,
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="size-14 shrink-0"
        fill="none"
      >
        <circle cx="32" cy="32" r="29" fill="#F7F4E8" stroke="#2D6A42" strokeWidth="2" />

        <path d="M29 25c-8-1-12-6-11-13 8 0 13 4 14 12" fill="#438B50" />
        <path d="M32 24c1-8 6-12 14-12 1 7-4 12-14 14" fill="#75AF45" />
        <path d="M29 25c-3-5-6-8-10-10m13 9c3-5 7-8 12-10" stroke="#EAF4D8" strokeWidth="1.4" strokeLinecap="round" />

        <path d="m40 29 11-10" stroke="#80501F" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M48 14c-2 0-3.5 1.5-3.5 3.5S46 21 48 21s3.5-1.5 3.5-3.5S50 14 48 14Z" fill="#D99120" stroke="#80501F" strokeWidth="1.2" />
        <path d="M46 16.5h4m-4 2h4" stroke="#FFE3A1" strokeWidth=".8" strokeLinecap="round" />

        <rect x="21" y="27" width="23" height="6" rx="2" fill="#356B43" />
        <path d="M23 32h19l-1.5 19a5 5 0 0 1-5 4h-6a5 5 0 0 1-5-4L23 32Z" fill="#F3B63F" stroke="#A7651C" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M25 40c4-1.5 10-1.5 15 0v10H26l-1-10Z" fill="#E99A25" />
        <path d="M28 37h8" stroke="#FFF2CB" strokeWidth="1.6" strokeLinecap="round" />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap text-xl font-bold tracking-[-0.045em] sm:text-2xl">
          Healthy <span className="text-[#E2A32B]">Bari</span>
        </span>
        {showTagline && (
          <span className="mt-1.5 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-400 sm:text-[10px] sm:tracking-[0.2em]">
            Pure Food · Healthy Life
          </span>
        )}
      </span>
    </span>
  );
}
