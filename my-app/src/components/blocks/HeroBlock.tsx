import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import ArrowRightIcon from '../icons/ArrowRightIcon';

interface HeroBlockProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  variant?: 'default' | 'service' | 'location';
}

export default function HeroBlock({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
  variant = 'default'
}: HeroBlockProps) {
  const t = useTranslations();
  const locale = useLocale();

  const defaultCtaText = ctaText || t('blocks.hero.cta');
  const defaultCtaLink = ctaLink || `/${locale}/contact`;

  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      )}

      {/* Background Pattern */}
      {!backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 40% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)`
          }} />
        </div>
      )}

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {variant === 'service' && (
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <span>{t('navigation.services')}</span>
              </div>
            )}
            
            {variant === 'location' && (
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <span>Berlin, {t('common.germany')}</span>
              </div>
            )}

            <h1 className={`font-bold leading-tight mb-6 ${
              backgroundImage ? 'text-white' : 'text-gray-900'
            } ${
              variant === 'default' 
                ? 'text-4xl sm:text-5xl lg:text-6xl' 
                : 'text-3xl sm:text-4xl lg:text-5xl'
            }`}>
              <span className={backgroundImage ? '' : 'text-gradient'}>{title}</span>
            </h1>

            <p className={`text-lg sm:text-xl mb-8 max-w-2xl ${
              backgroundImage ? 'text-gray-200' : 'text-gray-600'
            }`}>
              {subtitle}
            </p>

            {description && (
              <p className={`text-base mb-8 max-w-2xl ${
                backgroundImage ? 'text-gray-300' : 'text-gray-500'
              }`}>
                {description}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={defaultCtaLink}
                className="inline-flex items-center justify-center btn-primary group"
              >
                {defaultCtaText}
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              {variant === 'default' && (
                <Link
                  href={`/${locale}/services`}
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    backgroundImage 
                      ? 'bg-white/20 text-white hover:bg-white/30 border border-white/30' 
                      : 'btn-outline'
                  }`}
                >
                  {t('common.ourServices')}
                </Link>
              )}
            </div>
          </div>

          {/* Right side content - Stats or Image */}
          <div className="hidden lg:flex items-center justify-center">
            {variant === 'default' ? (
              <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                <div className={`text-center p-6 rounded-xl ${
                  backgroundImage ? 'bg-white/10 backdrop-blur-sm' : 'bg-white shadow-lg'
                }`}>
                  <div className={`text-3xl font-bold mb-2 ${
                    backgroundImage ? 'text-white' : 'text-green-600'
                  }`}>50+</div>
                  <div className={`text-sm ${
                    backgroundImage ? 'text-gray-200' : 'text-gray-600'
                  }`}>
                    {locale === 'de' ? 'Erfolgreiche Projekte' : 'Successful Projects'}
                  </div>
                </div>
                
                <div className={`text-center p-6 rounded-xl ${
                  backgroundImage ? 'bg-white/10 backdrop-blur-sm' : 'bg-white shadow-lg'
                }`}>
                  <div className={`text-3xl font-bold mb-2 ${
                    backgroundImage ? 'text-white' : 'text-blue-600'
                  }`}>5+</div>
                  <div className={`text-sm ${
                    backgroundImage ? 'text-gray-200' : 'text-gray-600'
                  }`}>
                    {locale === 'de' ? 'Jahre Erfahrung' : 'Years Experience'}
                  </div>
                </div>
                
                <div className={`text-center p-6 rounded-xl col-span-2 ${
                  backgroundImage ? 'bg-white/10 backdrop-blur-sm' : 'bg-white shadow-lg'
                }`}>
                  <div className={`text-3xl font-bold mb-2 ${
                    backgroundImage ? 'text-white' : 'text-orange-600'
                  }`}>100%</div>
                  <div className={`text-sm ${
                    backgroundImage ? 'text-gray-200' : 'text-gray-600'
                  }`}>
                    {locale === 'de' ? 'Kundenzufriedenheit' : 'Client Satisfaction'}
                  </div>
                </div>
              </div>
            ) : (
              <div className={`w-full max-w-md h-96 rounded-xl ${
                backgroundImage ? 'bg-white/10 backdrop-blur-sm' : 'bg-gradient-to-br from-green-100 to-blue-100'
              } flex items-center justify-center`}>
                <div className={`text-6xl ${
                  backgroundImage ? 'text-white/50' : 'text-gray-300'
                }`}>
                  {variant === 'service' ? '🚀' : '🏢'}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
