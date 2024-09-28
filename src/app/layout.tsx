import type { Metadata } from 'next';

import '@/styles/globals.css';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
