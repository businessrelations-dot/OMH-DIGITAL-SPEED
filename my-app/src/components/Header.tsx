'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { key: 'home', href: `/${locale}` },
    { key: 'services', href: `/${locale}/services` },
    { key: 'contact', href: `/${locale}/contact` }
  ];

  const services = [
    { key: 'websites', slug: t('services.websites.slug') },
    { key: 'seoMarketing', slug: t('services.seoMarketing.slug') },
    { key: 'agenticAutomation', slug: t('services.agenticAutomation.slug') }
  ];

  const otherLocale = locale === 'en' ? 'de' : 'en';

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-gray-200/20">
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">OMH</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-green-500 font-medium transition-colors duration-200"
              >
                {t(`navigation.${item.key}`)}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-500 font-medium transition-colors duration-200 flex items-center">
                {t('navigation.services')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.key}
                      href={`/${locale}/services/${service.slug}`}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-500 transition-colors duration-200"
                    >
                      {t(`navigation.${service.key}`)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Language Switcher */}
            <Link
              href={`/${otherLocale}`}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-500 border border-gray-300 rounded-md hover:border-green-500 transition-all duration-200"
            >
              {otherLocale.toUpperCase()}
            </Link>

            {/* CTA Button */}
            <Link
              href={`/${locale}/contact`}
              className="btn-primary"
            >
              {t('common.contactUs')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 hover:text-green-500 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`navigation.${item.key}`)}
                </Link>
              ))}
              
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-medium text-gray-900 mb-2">{t('navigation.services')}</p>
                {services.map((service) => (
                  <Link
                    key={service.key}
                    href={`/${locale}/services/${service.slug}`}
                    className="block pl-4 py-2 text-gray-600 hover:text-green-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(`navigation.${service.key}`)}
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <Link
                  href={`/${otherLocale}`}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-500 border border-gray-300 rounded-md"
                >
                  {otherLocale.toUpperCase()}
                </Link>
                
                <Link
                  href={`/${locale}/contact`}
                  className="btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('common.contactUs')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
