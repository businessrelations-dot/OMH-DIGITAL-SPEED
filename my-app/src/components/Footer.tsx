import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const services = [
    { key: 'websites', slug: t('services.websites.slug') },
    { key: 'seoMarketing', slug: t('services.seoMarketing.slug') },
    { key: 'agenticAutomation', slug: t('services.agenticAutomation.slug') }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">OMH</span>
                </div>
                <span className="text-xl font-bold text-white">Digital GmbH</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                {locale === 'de' 
                  ? 'Digitale SEO Services mit smarter Agentic KI. Transformieren Sie Ihr Unternehmen mit modernsten digitalen Lösungen in Berlin.'
                  : 'Digital SEO Services powered by smart Agentic AI. Transform your business with cutting-edge digital solutions in Berlin.'
                }
              </p>
              <div className="space-y-2 text-gray-300">
                <p>OMH Digital GmbH</p>
                <p>Keithstraße 16</p>
                <p>10787 Berlin, {t('common.germany')}</p>
                <p>E-Mail: <a href="mailto:info@omh.net" className="text-green-400 hover:text-green-300">info@omh.net</a></p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('navigation.services')}</h3>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.key}>
                    <Link
                      href={`/${locale}/services/${service.slug}`}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                    >
                      {t(`navigation.${service.key}`)}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={`/${locale}/services/${services[0].slug}/berlin`}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {t('navigation.websites')} Berlin
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/services/${services[1].slug}/berlin`}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    SEO Marketing Berlin
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/services/${services[2].slug}/berlin`}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    AI Automation Berlin
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">
                {locale === 'de' ? 'Schnellzugriff' : 'Quick Links'}
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href={`/${locale}`}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {t('navigation.home')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/contact`}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {t('navigation.contact')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={locale === 'en' ? '/de' : '/en'}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {locale === 'en' ? 'Deutsch' : 'English'}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} OMH Digital GmbH. {locale === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link 
                href={`/${locale}/privacy`} 
                className="hover:text-green-400 transition-colors duration-200"
              >
                {locale === 'de' ? 'Datenschutz' : 'Privacy Policy'}
              </Link>
              <Link 
                href={`/${locale}/terms`} 
                className="hover:text-green-400 transition-colors duration-200"
              >
                {locale === 'de' ? 'AGB' : 'Terms of Service'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
