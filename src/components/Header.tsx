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
      className="sticky top-0 z-40 w-full bg-[#0f2447] border-b border-[#0a1933]"
      dir="rtl"
    >
      <header className="flex h-[46px] w-full items-center justify-between px-3 md:h-[52px] md:px-6">
        {/* Right side (RTL start): back arrow */}
        <button
          type="button"
          aria-label="رجوع"
          onClick={onBack}
          className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-white/95 transition-colors hover:bg-white/10 active:opacity-60"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="4" y1="12" x2="20" y2="12" />
            <polyline points="13 5 20 12 13 19" />
          </svg>
        </button>

        {/* Center: harmonized deep-blue wallet capsule (#1c3766 outer + #12274b inner) + blue + image */}
        <button
          type="button"
          aria-label="إيداع"
          onClick={onOpenDeposit}
          className="inline-flex max-w-[74vw] cursor-pointer items-center gap-[5px] rounded-full border border-[#2b4d85] bg-[#1c3766] px-[4.5px] py-[3.5px] shadow-sm transition-transform active:scale-[0.98]"
        >
          <span
            dir="ltr"
            className="flex h-[24px] min-w-[84px] items-center justify-center rounded-full bg-[#12274b] px-3.5 text-[12px] font-medium leading-none tracking-[0.01em] text-[#eef4fc] tabular-nums whitespace-nowrap"
          >
            {formattedBalance} ج.م
          </span>

          <span
            className="relative flex h-[24px] w-[32px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[#070ac0]"
            aria-hidden="true"
          >
            <img
              src="/assets/aistudio/photo_2026-11-24_23-32-34_f4b9464c.jpg"
              alt=""
              draggable={false}
              className="h-full w-full scale-[1.22] object-cover select-none"
            />
          </span>
        </button>

        {/* Left side (RTL end): BONUS + rosette seal */}
        <button
          type="button"
          aria-label="المكافآت والإشعارات"
          onClick={onOpenNotifications}
          className="relative flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#b9c9de] transition-colors hover:bg-white/10 active:opacity-60"
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
              stroke="#b9c9de"
              strokeWidth="1.4"
              strokeLinejoin="round"
              fill="#0f2447"
            />
            <text
              x="17"
              y="18.8"
              textAnchor="middle"
              fill="#dce6f2"
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
              fill="#b9c9de"
              stroke="#0f2447"
              strokeWidth="1.3"
            />
            <path
              d="M25.6 23.4v4.4M23.4 25.6h4.4"
              stroke="#0f2447"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>
    </div>
  );
}
