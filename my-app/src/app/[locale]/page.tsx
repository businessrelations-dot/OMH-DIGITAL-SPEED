import { useTranslations } from 'next-intl';

export default function HomePage({params}: {params: {locale: string}}) {
  const t = useTranslations();
  const {locale} = params;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {t('homepage.hero.title')}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {t('homepage.hero.subtitle')}
        </p>
        <p className="text-lg text-gray-700">
          Current locale: {locale}
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t('homepage.services.title')}
          </h2>
          <ul className="space-y-2">
            <li>• {t('services.websites.title')}</li>
            <li>• {t('services.seoMarketing.title')}</li>
            <li>• {t('services.agenticAutomation.title')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
