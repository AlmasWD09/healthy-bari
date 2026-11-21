export default function WhatsAppFloat() {
  return (
    <div className="whatsapp-float fixed bottom-5 right-4 z-40 sm:bottom-7 sm:right-7 ">
      <div className="group relative flex items-center justify-end">
        <span
          aria-hidden="true"
          className="whatsapp-float__ring absolute inset-0 rounded-full bg-[#25d366]"
        />
        <button
          type="button"
          aria-label="Chat with us on WhatsApp"
          className="relative inline-flex size-[60px] items-center justify-center rounded-full bg-gradient-to-br from-[#35e278] to-[#16b957] text-white shadow-[0_8px_24px_rgba(22,185,87,0.38)] transition duration-200 hover:scale-105 hover:shadow-[0_12px_30px_rgba(22,185,87,0.48)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25d366]/30 focus-visible:ring-offset-2 active:scale-95 cursor-pointer"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            className="size-[30px] fill-current drop-shadow-sm"
          >
            <path d="M16.04 3C8.88 3 3.06 8.78 3.06 15.9c0 2.28.6 4.5 1.74 6.46L3 29l6.83-1.78a13.1 13.1 0 0 0 6.2 1.57h.01C23.2 28.79 29 23 29 15.9c0-3.45-1.35-6.7-3.8-9.14A12.9 12.9 0 0 0 16.04 3Zm0 23.58h-.01a10.9 10.9 0 0 1-5.55-1.52l-.4-.23-4.05 1.06 1.08-3.93-.26-.41a10.68 10.68 0 0 1-1.65-5.65c0-5.95 4.87-10.79 10.85-10.79 2.9 0 5.62 1.13 7.67 3.17a10.7 10.7 0 0 1 3.18 7.62c0 5.95-4.87 10.79-10.86 10.79Zm5.96-8.08c-.33-.16-1.94-.95-2.24-1.06-.3-.11-.52-.16-.74.16-.22.32-.85 1.06-1.04 1.27-.19.21-.38.24-.71.08-.33-.16-1.39-.51-2.64-1.62-.98-.86-1.64-1.92-1.83-2.25-.19-.32-.02-.5.14-.66.15-.14.33-.37.49-.56.17-.19.22-.32.33-.54.11-.21.06-.4-.03-.56-.08-.16-.74-1.77-1.02-2.42-.27-.63-.54-.54-.74-.55h-.63c-.22 0-.57.08-.87.4-.3.32-1.14 1.11-1.14 2.7s1.17 3.14 1.33 3.36c.17.21 2.3 3.5 5.57 4.9.78.34 1.38.54 1.85.69.78.25 1.49.22 2.05.13.63-.1 1.94-.79 2.21-1.55.27-.77.27-1.43.19-1.56-.09-.13-.3-.21-.63-.37Z" />
          </svg>
          <span
            aria-hidden="true"
            className="absolute right-0.5 top-0.5 size-3 rounded-full border-2 border-white bg-[#ff5a52]"
          />
        </button>
      </div>
    </div>
  );
}
