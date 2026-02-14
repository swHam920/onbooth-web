import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/navigation';

export const metadata: Metadata = {
  title: 'Onbooth Web',
  description: '산학연병 협력 반응형 플랫폼',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
