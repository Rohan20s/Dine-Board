import './globals.css';

import { ThemeProvider } from 'next-themes';
import PrelineScriptWrapper from '../components/Preline/PrelineScriptWrapper';
export const metadata = {
  title: 'Dark Mode Test',
  description: 'Next.js + Tailwind',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html  lang="en" suppressHydrationWarning >
      <body>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      </ThemeProvider>
      </body>
      <PrelineScriptWrapper />
    </html>
  );
}
