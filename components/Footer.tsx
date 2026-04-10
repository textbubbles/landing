export default function Footer() {
  const links = [
    { label: "Docs", href: "https://docs.textbubbles.com" },
    { label: "API Reference", href: "https://docs.textbubbles.com/api-reference" },
    { label: "SDK", href: "https://docs.textbubbles.com/sdk/installation/" },
    { label: "GitHub", href: "https://github.com/textbubbles" },
    { label: "Status", href: "https://status.textbubbles.com" },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-white/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-imessage-blue flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-500">
              &copy; 2026 TextBubbles
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
