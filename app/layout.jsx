import { GlobalErrorProvider } from '@/components/GlobalErrorContext';
import { GlobalErrorToast } from '@/components/GlobalErrorToast';
import { ModeToggle } from '@/components/ModeToggle';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata = {
  title: 'My JavaScript',
  description: 'Where you can learn JavaScript',
  icons: {
    icon: '/favicon-light.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-minion-yellow dark:bg-dark-charcoal text-dark-charcoal dark:text-minion-yellow relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <GlobalErrorProvider>
            <div className="fixed right-4 top-8  -translate-y-1/2 z-50">
              <ModeToggle />
            </div>
            {children}
            <GlobalErrorToast />
          </GlobalErrorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
