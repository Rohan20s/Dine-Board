
"use client";


import '../styles/global.scss';
import { ReactNode, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');
  const pathname = usePathname();
  const router = useRouter();

  // On mount, read theme from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark' || storedTheme === 'light') {
        setTheme(storedTheme);
      }
    }
  }, []);

  // Update localStorage and <body> class on theme change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
      if (theme === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (!token && pathname !== '/login' && pathname !== '/register' && pathname !== '/login/forgetPassword' && pathname !== '/price') {
        router.replace('/login');
      }
    }
  }, [pathname, router]);

  return (
    <html lang="en">
      <body className={`h-100vh w-100vwbg-background text-text dark:bg-background-dark dark:text-text-dark${theme === 'dark' ? ' dark' : ''}`}>
        jasnkjdaj
      </body>
    </html>
  );
}

