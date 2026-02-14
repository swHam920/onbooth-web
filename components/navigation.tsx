import Link from 'next/link';

const menus = [
  { label: '산', href: '/category/industry' },
  { label: '학', href: '/category/academy' },
  { label: '연', href: '/category/research' },
  { label: '병', href: '/category/hospital' },
  { label: '라운지', href: '/lounge' },
  { label: '고객센터', href: '/support' },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
          ONBOOTH
        </Link>
        <nav>
          <ul className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600 sm:gap-6">
            {menus.map((menu) => (
              <li key={menu.href}>
                <Link href={menu.href} className="transition hover:text-brand-700">
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
