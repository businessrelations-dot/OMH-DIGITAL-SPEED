import localFont from "next/font/local";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import "../globals.css";

const locales = ['en', 'de'] as const;
type Locale = typeof locales[number];

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: {locale: string}}) {
  const {locale} = params;
  
  return {
    title: locale === 'de' 
      ? "OMH Digital - Digitale SEO Services mit smarter Agentic KI"
      : "OMH Digital - Digital SEO Services powered by smart Agentic AI",
    description: locale === 'de'
      ? "Führende digitale Agentur in Berlin mit Spezialisierung auf KI-basierte Lösungen, Webseiten-Entwicklung, SEO Marketing und intelligente Automatisierung."
      : "Leading digital agency in Berlin specializing in AI-powered solutions, website development, SEO marketing, and intelligent automation.",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'de': '/de',
      }
    },
    openGraph: {
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      alternateLocale: locale === 'de' ? 'en_US' : 'de_DE',
    }
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
