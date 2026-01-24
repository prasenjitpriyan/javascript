import Footer from '@/components/Footer';
import { GlobalErrorProvider } from '@/components/GlobalErrorContext';
import { GlobalErrorToast } from '@/components/GlobalErrorToast';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata = {
  title: 'ScriptLens - Learn JavaScript Visually',
  description:
    "Don't just read code. See how it runs. Detailed visual explanations for every JavaScript concept.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon-light.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-light-32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon-light.png"
        />
      </head>
      <body className="bg-white dark:bg-dark-charcoal text-dark-charcoal dark:text-gray-100 min-h-screen flex flex-col font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange>
          <GlobalErrorProvider>
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
            <GlobalErrorToast />
          </GlobalErrorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
