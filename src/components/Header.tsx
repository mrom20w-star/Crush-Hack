interface HeaderProps {
  balance: number;
  unreadCount: number;
  onOpenDeposit: () => void;
  onOpenNotifications: () => void;
  onBack: () => void;
}

export function Header({
  balance,
  unreadCount,
  onOpenDeposit,
  onOpenNotifications,
  onBack,
}: HeaderProps) {
  void unreadCount;
  const formattedBalance = balance.toFixed(2);

  return (
    <div
      className="sticky top-0 z-40 w-full bg-white border-b border-[#e5e8ef]"
      dir="rtl"
    >
      <header className="flex h-[48px] w-full items-center justify-between px-3 md:h-[54px] md:px-6">
        {/* Right side (RTL start): slate-gray back arrow */}
        <button
          type="button"
          aria-label="رجوع"
          onClick={onBack}
          className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#6f7b8e] transition-colors hover:bg-black/5 hover:text-[#4b5563] active:opacity-60"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="4" y1="12" x2="20" y2="12" />
            <polyline points="13 5 20 12 13 19" />
          </svg>
        </button>

        {/* Center: exact #979797 outer capsule with generous padding & wide gap, #5c5c5c balance pill, and #39e981 green + button */}
        <button
          type="button"
          aria-label="إيداع"
          onClick={onOpenDeposit}
          className="inline-flex max-w-[78vw] cursor-pointer items-center gap-[11px] rounded-full border border-[#888888] bg-[#979797] px-[6.5px] py-[5.5px] transition-transform active:scale-[0.98]"
        >
          <span
            dir="ltr"
            className="flex h-[25px] min-w-[92px] items-center justify-center rounded-[9px] bg-[#5c5c5c] px-4 text-[13px] font-semibold leading-none tracking-[0.01em] text-white tabular-nums whitespace-nowrap"
          >
            {formattedBalance} ج.م
          </span>

          <span
            className="flex h-[25px] w-[38px] shrink-0 items-center justify-center rounded-[9px] bg-[#39e981]"
            aria-hidden="true"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#000000"
              strokeWidth="2.1"
              strokeLinecap="round"
            >
              <line x1="8" y1="2.5" x2="8" y2="13.5" />
              <line x1="2.5" y1="8" x2="13.5" y2="8" />
            </svg>
          </span>
        </button>

        {/* Left side (RTL end): BONUS + rosette seal */}
        <button
          type="button"
          aria-label="المكافآت والإشعارات"
          onClick={onOpenNotifications}
          className="relative flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#6f7b8e] transition-colors hover:bg-black/5 active:opacity-60"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 34 34"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M17 2.8l1.9 1.7 2.5-.8 1.2 2.3 2.6.2.3 2.6 2.4 1.1-.6 2.5 1.8 1.9-1.4 2.2 1 2.4-2.1 1.5.1 2.6-2.5.7-.7 2.5-2.6-.2-1.6 2-2.3-1-2.2 1.3-1.8-1.9-2.5.4-1-2.4-2.5-.4-.1-2.6-2.2-1.3.8-2.5-1.5-2 1.7-2-.7-2.5 2.3-1.2.2-2.6 2.6-.3 1.1-2.4 2.5.6L17 2.8z"
              stroke="#6f7b8e"
              strokeWidth="1.45"
              strokeLinejoin="round"
              fill="#ffffff"
            />
            <text
              x="17"
              y="18.8"
              textAnchor="middle"
              fill="#6f7b8e"
              fontSize="5.2"
              fontWeight="800"
              fontFamily="Roboto, Arial, sans-serif"
              letterSpacing="0.25"
            >
              BONUS
            </text>
            <circle
              cx="25.6"
              cy="25.6"
              r="4.7"
              fill="#6f7b8e"
              stroke="#ffffff"
              strokeWidth="1.3"
            />
            <path
              d="M25.6 23.4v4.4M23.4 25.6h4.4"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>
    </div>
  );
}
