import { GlobalErrorProvider } from '@/components/GlobalErrorContext';
import { GlobalErrorToast } from '@/components/GlobalErrorToast';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata = {
  title: 'My JavaScript',
  description: 'Where you can learn JavaScript',
  icons: {
    icons: { icon: '/favicon-light.svg' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-minion-yellow dark:bg-dark-charcoal text-dark-charcoal dark:text-minion-yellow">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <GlobalErrorProvider>
            {children}
            <GlobalErrorToast />
          </GlobalErrorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
