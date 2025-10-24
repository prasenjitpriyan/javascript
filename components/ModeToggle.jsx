'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    const currentTheme = resolvedTheme;

    const faviconMap = {
      light: {
        default: '/favicon-light.svg',
        png32: '/favicon-light-32.png',
        apple: '/apple-touch-icon-light.png',
        android192: '/android-chrome-192x192-light.png',
        android512: '/android-chrome-512x512-light.png',
      },
      dark: {
        default: '/favicon-dark.svg',
        png32: '/favicon-dark-32.png',
        apple: '/apple-touch-icon-dark.png',
        android192: '/android-chrome-192x192-dark.png',
        android512: '/android-chrome-512x512-dark.png',
      },
    };

    if (!faviconMap[currentTheme]) return;

    const links = [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        sizes: null,
        selector: 'link[rel="icon"][type="image/svg+xml"]',
        href: faviconMap[currentTheme].default,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        selector: 'link[rel="icon"][sizes="32x32"]',
        href: faviconMap[currentTheme].png32,
      },
      {
        rel: 'apple-touch-icon',
        type: null,
        sizes: '180x180',
        selector: 'link[rel="apple-touch-icon"]',
        href: faviconMap[currentTheme].apple,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        selector: 'link[rel="icon"][sizes="192x192"]',
        href: faviconMap[currentTheme].android192,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        selector: 'link[rel="icon"][sizes="512x512"]',
        href: faviconMap[currentTheme].android512,
      },
    ];

    links.forEach(({ rel, type, sizes, selector, href }) => {
      let link = document.querySelector(selector);
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        if (type) link.type = type;
        if (sizes) link.setAttribute('sizes', sizes);
        document.head.appendChild(link);
      }
      link.href = href;
    });
  }, [resolvedTheme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative rounded-full transition-all shadow-sm hover:shadow-md">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl shadow-lg">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
