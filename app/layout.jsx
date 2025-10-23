import { GlobalErrorProvider } from '@/components/GlobalErrorContext';
import { GlobalErrorToast } from '@/components/GlobalErrorToast';
import './globals.css';

export const metadata = {
  title: 'My JavaScript',
  description: 'Where you can learn JavaScript',
  icons: {
    icon: [
      { url: '/favicon-light.svg', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-dark.svg', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-minion-yellow dark:bg-dark-charcoal text-dark-charcoal dark:text-minion-yellow">
        <GlobalErrorProvider>
          {children}
          <GlobalErrorToast />
        </GlobalErrorProvider>
      </body>
    </html>
  );
}
