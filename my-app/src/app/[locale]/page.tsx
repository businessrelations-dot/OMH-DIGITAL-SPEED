import { useTranslations } from 'next-intl';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroBlock from '../../components/blocks/HeroBlock';
import FeaturesBlock from '../../components/blocks/FeaturesBlock';
import CTABlock from '../../components/blocks/CTABlock';
import Image from 'next/image';
import Link from 'next/link';
import WebsiteIcon from '../../components/icons/WebsiteIcon';
import SEOIcon from '../../components/icons/SEOIcon';
import AutomationIcon from '../../components/icons/AutomationIcon';
import ArrowRightIcon from '../../components/icons/ArrowRightIcon';

export async function generateMetadata({params}: {params: {locale: string}}) {
  const {locale} = params;
  
  return {
    title: locale === 'de' 
      ? "OMH Digital - Digitale SEO Services mit smarter Agentic KI | Berlin"
      : "OMH Digital - Digital SEO Services powered by smart Agentic AI | Berlin",
    description: locale === 'de'
      ? "Führende digitale Agentur in Berlin. Webseiten-Entwicklung, SEO Marketing und KI-Automatisierung für Ihr Unternehmen. Jetzt kostenlos beraten lassen!"
      : "Leading digital agency in Berlin. Website development, SEO marketing, and AI automation for your business. Get a free consultation today!",
    keywords: locale === 'de' 
      ? "Webseiten Berlin, SEO Marketing Berlin, KI Automatisierung, Digitale Agentur Berlin, Online Marketing"
      : "Website Development Berlin, SEO Marketing Berlin, AI Automation, Digital Agency Berlin, Online Marketing",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'de': '/de',
      }
    }
  };
}

export default function HomePage({params}: {params: {locale: string}}) {
  const t = useTranslations();
  const {locale} = params;

  const services = [
    {
      icon: <WebsiteIcon className="w-16 h-16 text-green-600" />,
      title: t('services.websites.title'),
      description: t('services.websites.description'),
      slug: t('services.websites.slug'),
      bgColor: 'from-green-50 to-green-100',
      hoverColor: 'group-hover:shadow-green-200'
    },
    {
      icon: <SEOIcon className="w-16 h-16 text-blue-600" />,
      title: t('services.seoMarketing.title'),
      description: t('services.seoMarketing.description'),
      slug: t('services.seoMarketing.slug'),
      bgColor: 'from-blue-50 to-blue-100',
      hoverColor: 'group-hover:shadow-blue-200'
    },
    {
      icon: <AutomationIcon className="w-16 h-16 text-orange-600" />,
      title: t('services.agenticAutomation.title'),
      description: t('services.agenticAutomation.description'),
      slug: t('services.agenticAutomation.slug'),
      bgColor: 'from-orange-50 to-orange-100',
      hoverColor: 'group-hover:shadow-orange-200'
    }
  ];

  const clientLogos = [
    { name: "Business Insider", src: "/Images/business-insider-logo.webp" },
    { name: "Focus Online", src: "/Images/Focus-online-logo (1).webp" },
    { name: "Bundesamt für Wirtschaft", src: "/Images/bundesamt-für-wirtschaft-logo.webp" },
    { name: "Burda Verlag", src: "/Images/Burdaverlag-logo.webp" },
    { name: "Gründer Szene", src: "/Images/gründer-szene-logo.webp" },
    { name: "Berliner Woche", src: "/Images/berliner-woche-logo.webp" }
  ];

  const processSteps = [
    {
      number: "01",
      title: locale === 'de' ? "Beratung & Analyse" : "Consultation & Analysis",
      description: locale === 'de' 
        ? "Wir analysieren Ihre Bedürfnisse und entwickeln eine maßgeschneiderte Strategie."
        : "We analyze your needs and develop a tailored strategy for your business."
    },
    {
      number: "02", 
      title: locale === 'de' ? "Konzept & Design" : "Concept & Design",
      description: locale === 'de'
        ? "Erstellung eines detaillierten Konzepts mit modernem Design und Benutzerfreundlichkeit."
        : "Creation of a detailed concept with modern design and user experience focus."
    },
    {
      number: "03",
      title: locale === 'de' ? "Entwicklung & Optimierung" : "Development & Optimization", 
      description: locale === 'de'
        ? "Technische Umsetzung mit Fokus auf Performance und Suchmaschinenoptimierung."
        : "Technical implementation focused on performance and search engine optimization."
    },
    {
      number: "04",
      title: locale === 'de' ? "Launch & Support" : "Launch & Support",
      description: locale === 'de'
        ? "Erfolgreicher Launch mit anschließendem Support und kontinuierlicher Optimierung."
        : "Successful launch with ongoing support and continuous optimization."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <HeroBlock
        title={t('homepage.hero.title')}
        subtitle={t('homepage.hero.subtitle')}
        ctaText={t('homepage.hero.cta')}
        backgroundImage="/Images/steve-johnson-ZPOoDQc8yMw-unsplash.jpg"
        variant="default"
      />

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('homepage.services.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('homepage.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/${locale}/services/${service.slug}`}
                className={`group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${service.hoverColor}`}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                  <span>{t('common.learnMore')}</span>
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {locale === 'de' ? 'Vertrauen von führenden Unternehmen' : 'Trusted by Leading Companies'}
            </h2>
            <p className="text-gray-600">
              {locale === 'de' ? 'Unsere Kunden erreichen ihre digitalen Ziele' : 'Our clients achieve their digital goals'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div
                key={logo.name}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('common.ourProcess')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'de' 
                ? 'Unser bewährter 4-Schritte-Prozess für Ihren digitalen Erfolg'
                : 'Our proven 4-step process for your digital success'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-200 to-blue-200 -translate-y-0.5" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Stats Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {t('homepage.about.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('homepage.about.description')}
              </p>
              <p className="text-gray-600 mb-8">
                {locale === 'de' 
                  ? 'Mit Sitz in Berlin bieten wir innovative digitale Lösungen, die Ihr Unternehmen voranbringen. Unsere Expertise in KI-gestützten Technologien macht uns zum idealen Partner für Ihr digitales Wachstum.'
                  : 'Based in Berlin, we provide innovative digital solutions that drive your business forward. Our expertise in AI-powered technologies makes us the ideal partner for your digital growth.'
                }
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">
                    {locale === 'de' ? 'Erfolgreiche Projekte' : 'Successful Projects'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">
                    {locale === 'de' ? 'Jahre Erfahrung' : 'Years Experience'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">
                    {locale === 'de' ? 'Kundenzufriedenheit' : 'Client Satisfaction'}
                  </div>
                </div>
              </div>

              <Link
                href={`/${locale}/contact`}
                className="btn-primary inline-flex items-center"
              >
                {t('common.getStarted')}
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="relative">
              <div className="relative">
                <Image
                  src="/Images/omh-team.webp"
                  alt="OMH Digital Team"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-green-500/20 to-blue-500/20" />
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Berlin Based</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🤖</span>
                  <span className="text-sm font-medium">AI Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Default Features Block */}
      <FeaturesBlock />

      {/* CTA Section */}
      <CTABlock
        title={locale === 'de' ? 'Bereit für Ihr nächstes digitales Projekt?' : 'Ready for Your Next Digital Project?'}
        subtitle={locale === 'de' 
          ? 'Lassen Sie uns gemeinsam Ihre Ziele erreichen. Kontaktieren Sie uns für eine kostenlose Beratung.'
          : 'Let\'s achieve your goals together. Contact us for a free consultation.'
        }
        variant="gradient"
      />

      <Footer />
    </>
  );
}
