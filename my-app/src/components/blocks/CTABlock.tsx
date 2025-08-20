import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import ArrowRightIcon from '../icons/ArrowRightIcon';

interface CTABlockProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
  variant?: 'default' | 'gradient' | 'simple' | 'contact';
  className?: string;
}

export default function CTABlock({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage,
  variant = 'default',
  className = ''
}: CTABlockProps) {
  const t = useTranslations();
  const locale = useLocale();

  const defaultTitle = title || t('blocks.cta.title');
  const defaultSubtitle = subtitle || t('blocks.cta.subtitle');
  const defaultPrimaryText = primaryButtonText || t('blocks.cta.button');
  const defaultPrimaryLink = primaryButtonLink || `/${locale}/contact`;

  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white';
      case 'simple':
        return 'bg-white border-2 border-gray-200';
      case 'contact':
        return 'bg-gradient-to-br from-green-50 to-blue-50 border border-green-200';
      default:
        return 'bg-gray-900 text-white';
    }
  };

  const getButtonClasses = (isPrimary: boolean) => {
    if (variant === 'gradient') {
      return isPrimary 
        ? 'bg-white text-gray-900 hover:bg-gray-100' 
        : 'border-2 border-white text-white hover:bg-white hover:text-gray-900';
    }
    if (variant === 'simple' || variant === 'contact') {
      return isPrimary 
        ? 'btn-primary' 
        : 'btn-outline';
    }
    return isPrimary 
      ? 'bg-green-500 text-white hover:bg-green-600' 
      : 'border-2 border-white text-white hover:bg-white hover:text-gray-900';
  };

  return (
    <section className={`section-padding relative overflow-hidden ${className}`}>
      {/* Background */}
      <div className={`absolute inset-0 ${getVariantClasses()}`}>
        {backgroundImage && (
          <>
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </>
        )}
        
        {variant === 'gradient' && (
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20" />
        )}

        {/* Pattern overlay */}
        {!backgroundImage && variant !== 'simple' && (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, currentColor 2px, transparent 2px)`,
              backgroundSize: '50px 50px',
              backgroundPosition: '0 0, 25px 25px'
            }} />
          </div>
        )}
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
            variant === 'simple' || variant === 'contact' ? 'text-gray-900' : ''
          }`}>
            {defaultTitle}
          </h2>
          
          <p className={`text-lg sm:text-xl mb-8 ${
            variant === 'simple' || variant === 'contact' 
              ? 'text-gray-600' 
              : variant === 'gradient' 
                ? 'text-white/90' 
                : 'text-gray-300'
          }`}>
            {defaultSubtitle}
          </p>

          {description && (
            <p className={`text-base mb-12 max-w-2xl mx-auto ${
              variant === 'simple' || variant === 'contact' 
                ? 'text-gray-500' 
                : variant === 'gradient' 
                  ? 'text-white/80' 
                  : 'text-gray-400'
            }`}>
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={defaultPrimaryLink}
              className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 group ${getButtonClasses(true)}`}
            >
              {defaultPrimaryText}
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            {secondaryButtonText && secondaryButtonLink && (
              <Link
                href={secondaryButtonLink}
                className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${getButtonClasses(false)}`}
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>

          {variant === 'contact' && (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">📧</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:info@omh.net" className="text-green-600 hover:text-green-700">
                  info@omh.net
                </a>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">📍</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('contact.address')}</h3>
                <p className="text-gray-600">
                  Keithstraße 16<br />
                  10787 Berlin
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {locale === 'de' ? 'Schnelle Antwort' : 'Quick Response'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'de' ? 'Antwort innerhalb 24h' : 'Response within 24h'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      {variant === 'default' && (
        <>
          <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full" />
          <div className="absolute top-1/2 right-8 w-2 h-2 bg-white/30 rounded-full" />
          <div className="absolute bottom-1/3 left-8 w-3 h-3 bg-white/20 rounded-full" />
        </>
      )}

      {variant === 'gradient' && (
        <>
          <div className="absolute top-8 left-8 w-24 h-24 border border-white/30 rounded-full animate-pulse" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border border-white/20 rounded-full animate-pulse animation-delay-200" />
          <div className="absolute top-1/3 right-12 w-4 h-4 bg-white/40 rounded-full animate-bounce animation-delay-400" />
        </>
      )}
    </section>
  );
}
