
"use client";


import '../styles/global.scss';
import { ReactNode, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');
  const pathname = usePathname();
  const router = useRouter();

  // Set data-theme attribute on <html>
  if (typeof window !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (!token && pathname !== '/login' && pathname !== '/register' && pathname !== '/login/forgetPassword' && pathname !== '/price') {
        router.replace('/login');
      }
    }
  }, [pathname, router]);

  return (
    <html lang="en" data-theme={theme}>
      <body className="bg-light">
        <button
          style={{ position: 'fixed', top: 10, right: 10, zIndex: 1000, background: 'none', border: 'none', fontSize: '1.8rem', cursor: 'pointer' }}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        {children}
      </body>
    </html>
  );
}

