// app/page.tsx

import { Button } from "@/components/ui/button";
import { ThemeToggle } from '@/components/theme_toggle';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white transition-all duration-300">
      <div className="max-w-3xl text-center space-y-4">
        <h1 className="text-3xl font-bold">Dark Mode Toggle Test</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis asperiores aliquam quibusdam, tempore veniam, officiis ut quas blanditiis distinctio laborum, quaerat modi.</p>
        <div className="space-x-2">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-300 dark:text-black">first</Button>
            <Button variant="secondary">second</Button>
        </div>
        <ThemeToggle />
      </div>
    </main>
  );
}
