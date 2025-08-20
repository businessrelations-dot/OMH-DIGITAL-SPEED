import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import HeroBlock from '../../../../components/blocks/HeroBlock';
import FeaturesBlock from '../../../../components/blocks/FeaturesBlock';
import CTABlock from '../../../../components/blocks/CTABlock';
import Image from 'next/image';
import Link from 'next/link';
import CheckIcon from '../../../../components/icons/CheckIcon';
import ArrowRightIcon from '../../../../components/icons/ArrowRightIcon';

const services = {
  en: ['websites', 'seo-marketing', 'agentic-automation'],
  de: ['webseiten', 'seo-marketing', 'agentic-automation']
} as const;

const serviceMap = {
  'websites': 'websites',
  'webseiten': 'websites',
  'seo-marketing': 'seoMarketing',
  'agentic-automation': 'agenticAutomation'
} as const;

export function generateStaticParams() {
  const params: { locale: string; service: string }[] = [];
  
  // Generate for all locales and services
  Object.entries(services).forEach(([locale, servicesList]) => {
    servicesList.forEach(service => {
      params.push({ locale, service });
    });
  });
  
  return params;
}

export async function generateMetadata({params}: {params: {locale: string; service: string}}) {
  const {locale, service} = params;
  
  const serviceKey = serviceMap[service as keyof typeof serviceMap];
  if (!serviceKey) return {};

  const titles = {
    websites: {
      en: "Professional Website Development in Berlin | OMH Digital",
      de: "Professionelle Webseiten-Entwicklung in Berlin | OMH Digital"
    },
    seoMarketing: {
      en: "SEO Marketing Services in Berlin | Digital Marketing Agency",
      de: "SEO Marketing Services in Berlin | Digital Marketing Agentur"  
    },
    agenticAutomation: {
      en: "AI Automation Services in Berlin | Agentic AI Solutions",
      de: "KI Automatisierung Services in Berlin | Agentic AI Lösungen"
    }
  };

  const descriptions = {
    websites: {
      en: "Expert website development services in Berlin. Modern, responsive, and conversion-focused web solutions for your business. Get a free consultation!",
      de: "Experten-Webseiten-Entwicklung in Berlin. Moderne, responsive und konversionsorientierte Web-Lösungen für Ihr Unternehmen. Kostenlose Beratung!"
    },
    seoMarketing: {
      en: "Professional SEO marketing services in Berlin. Increase your online visibility and drive organic traffic with our proven strategies.",
      de: "Professionelle SEO Marketing Services in Berlin. Steigern Sie Ihre Online-Sichtbarkeit und organischen Traffic mit bewährten Strategien."
    },
    agenticAutomation: {
      en: "Transform your business with intelligent AI automation. Professional agentic AI services in Berlin for streamlined operations.",
      de: "Transformieren Sie Ihr Unternehmen mit intelligenter KI-Automatisierung. Professionelle Agentic AI Services in Berlin für optimierte Abläufe."
    }
  };

  return {
    title: titles[serviceKey][locale as keyof typeof titles[typeof serviceKey]],
    description: descriptions[serviceKey][locale as keyof typeof descriptions[typeof serviceKey]],
    alternates: {
      canonical: `/${locale}/services/${service}`,
      languages: {
        'en': `/en/services/${locale === 'de' && service === 'webseiten' ? 'websites' : service}`,
        'de': `/de/services/${locale === 'en' && service === 'websites' ? 'webseiten' : service}`,
      }
    }
  };
}

export default function ServicePage({params}: {params: {locale: string; service: string}}) {
  const t = useTranslations();
  const {locale, service} = params;

  const serviceKey = serviceMap[service as keyof typeof serviceMap];
  if (!serviceKey) {
    notFound();
  }

  const getServiceContent = () => {
    switch (serviceKey) {
      case 'websites':
        return {
          hero: {
            title: t('services.websites.title'),
            subtitle: t('services.websites.description'),
            backgroundImage: '/Images/cherrydeck-rMILC1PIwM0-unsplash.jpg'
          },
          benefits: [
            {
              title: locale === 'de' ? 'Responsive Design' : 'Responsive Design',
              description: locale === 'de' 
                ? 'Perfekte Darstellung auf allen Geräten - Desktop, Tablet und Smartphone.'
                : 'Perfect display on all devices - desktop, tablet, and smartphone.'
            },
            {
              title: locale === 'de' ? 'SEO Optimiert' : 'SEO Optimized',
              description: locale === 'de'
                ? 'Von Grund auf für Suchmaschinen optimiert für bessere Rankings.'
                : 'Built from the ground up to be search engine optimized for better rankings.'
            },
            {
              title: locale === 'de' ? 'Schnelle Ladezeiten' : 'Fast Loading Speed',
              description: locale === 'de'
                ? 'Optimierte Performance für bessere Nutzererfahrung und SEO.'
                : 'Optimized performance for better user experience and SEO.'
            },
            {
              title: locale === 'de' ? 'Moderne Technologien' : 'Modern Technologies',
              description: locale === 'de'
                ? 'Neueste Web-Technologien wie React, Next.js und TypeScript.'
                : 'Latest web technologies like React, Next.js, and TypeScript.'
            }
          ],
          process: {
            title: locale === 'de' ? 'Unser Website-Entwicklungsprozess' : 'Our Website Development Process',
            steps: [
              {
                title: locale === 'de' ? 'Bedarfsanalyse' : 'Requirements Analysis',
                description: locale === 'de'
                  ? 'Wir verstehen Ihre Geschäftsziele und technischen Anforderungen.'
                  : 'We understand your business goals and technical requirements.'
              },
              {
                title: locale === 'de' ? 'Design & Prototyping' : 'Design & Prototyping',
                description: locale === 'de'
                  ? 'Erstellung von Wireframes und interaktiven Prototypen.'
                  : 'Creation of wireframes and interactive prototypes.'
              },
              {
                title: locale === 'de' ? 'Entwicklung' : 'Development',
                description: locale === 'de'
                  ? 'Professionelle Programmierung mit modernen Frameworks.'
                  : 'Professional programming with modern frameworks.'
              },
              {
                title: locale === 'de' ? 'Testing & Launch' : 'Testing & Launch',
                description: locale === 'de'
                  ? 'Umfassende Tests und erfolgreicher Launch Ihrer Website.'
                  : 'Comprehensive testing and successful launch of your website.'
              }
            ]
          }
        };
      
      case 'seoMarketing':
        return {
          hero: {
            title: t('services.seoMarketing.title'),
            subtitle: t('services.seoMarketing.description'),
            backgroundImage: '/Images/fabio-oyXis2kALVg-unsplash.jpg'
          },
          benefits: [
            {
              title: locale === 'de' ? 'Technisches SEO' : 'Technical SEO',
              description: locale === 'de'
                ? 'Optimierung der technischen Grundlagen für bessere Suchmaschinen-Performance.'
                : 'Optimization of technical foundations for better search engine performance.'
            },
            {
              title: locale === 'de' ? 'Content-Strategie' : 'Content Strategy',
              description: locale === 'de'
                ? 'Datengetriebene Content-Strategien für Ihre Zielgruppe.'
                : 'Data-driven content strategies for your target audience.'
            },
            {
              title: locale === 'de' ? 'Local SEO Berlin' : 'Local SEO Berlin',
              description: locale === 'de'
                ? 'Dominieren Sie die lokalen Suchergebnisse in Berlin und Umgebung.'
                : 'Dominate local search results in Berlin and surrounding areas.'
            },
            {
              title: locale === 'de' ? 'Analytics & Reporting' : 'Analytics & Reporting',
              description: locale === 'de'
                ? 'Detaillierte Berichte und kontinuierliche Leistungsoptimierung.'
                : 'Detailed reporting and continuous performance optimization.'
            }
          ],
          process: {
            title: locale === 'de' ? 'Unser SEO-Prozess' : 'Our SEO Process',
            steps: [
              {
                title: locale === 'de' ? 'SEO Audit' : 'SEO Audit',
                description: locale === 'de'
                  ? 'Umfassende Analyse Ihrer aktuellen SEO-Performance.'
                  : 'Comprehensive analysis of your current SEO performance.'
              },
              {
                title: locale === 'de' ? 'Keyword Research' : 'Keyword Research',
                description: locale === 'de'
                  ? 'Identifikation der wertvollsten Keywords für Ihr Business.'
                  : 'Identification of the most valuable keywords for your business.'
              },
              {
                title: locale === 'de' ? 'On-Page Optimierung' : 'On-Page Optimization',
                description: locale === 'de'
                  ? 'Optimierung aller on-page Faktoren für bessere Rankings.'
                  : 'Optimization of all on-page factors for better rankings.'
              },
              {
                title: locale === 'de' ? 'Monitoring & Anpassung' : 'Monitoring & Adjustment',
                description: locale === 'de'
                  ? 'Kontinuierliche Überwachung und Anpassung der Strategie.'
                  : 'Continuous monitoring and strategy adjustment.'
              }
            ]
          }
        };
      
      case 'agenticAutomation':
        return {
          hero: {
            title: t('services.agenticAutomation.title'),
            subtitle: t('services.agenticAutomation.description'),
            backgroundImage: '/Images/boliviainteligente-dCvqMHRUIhY-unsplash.jpg'
          },
          benefits: [
            {
              title: locale === 'de' ? 'Intelligente Prozess-Automatisierung' : 'Intelligent Process Automation',
              description: locale === 'de'
                ? 'KI-gestützte Automatisierung, die lernt und sich an Ihre Prozesse anpasst.'
                : 'AI-powered automation that learns and adapts to your processes.'
            },
            {
              title: locale === 'de' ? 'Agentic AI Lösungen' : 'Agentic AI Solutions',
              description: locale === 'de'
                ? 'Autonome KI-Agenten, die komplexe Aufgaben selbstständig bewältigen.'
                : 'Autonomous AI agents that handle complex tasks independently.'
            },
            {
              title: locale === 'de' ? 'System-Integration' : 'System Integration',
              description: locale === 'de'
                ? 'Nahtlose Integration in Ihre bestehenden Tools und Plattformen.'
                : 'Seamless integration with your existing tools and platforms.'
            },
            {
              title: locale === 'de' ? 'Performance Monitoring' : 'Performance Monitoring',
              description: locale === 'de'
                ? 'Echtzeit-Überwachung und Optimierung der Automatisierungsleistung.'
                : 'Real-time monitoring and optimization of automation performance.'
            }
          ],
          process: {
            title: locale === 'de' ? 'Unser KI-Automatisierungsprozess' : 'Our AI Automation Process',
            steps: [
              {
                title: locale === 'de' ? 'Prozess-Analyse' : 'Process Analysis',
                description: locale === 'de'
                  ? 'Detaillierte Analyse Ihrer bestehenden Geschäftsprozesse.'
                  : 'Detailed analysis of your existing business processes.'
              },
              {
                title: locale === 'de' ? 'KI-Modell Design' : 'AI Model Design',
                description: locale === 'de'
                  ? 'Entwicklung maßgeschneiderter KI-Modelle für Ihre Anforderungen.'
                  : 'Development of tailored AI models for your requirements.'
              },
              {
                title: locale === 'de' ? 'Implementation' : 'Implementation',
                description: locale === 'de'
                  ? 'Professionelle Implementierung und Integration der KI-Systeme.'
                  : 'Professional implementation and integration of AI systems.'
              },
              {
                title: locale === 'de' ? 'Optimierung & Support' : 'Optimization & Support',
                description: locale === 'de'
                  ? 'Kontinuierliche Optimierung und technischer Support.'
                  : 'Continuous optimization and technical support.'
              }
            ]
          }
        };
      
      default:
        return null;
    }
  };

  const content = getServiceContent();
  if (!content) {
    notFound();
  }

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <HeroBlock
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        ctaText={t('common.contactUs')}
        backgroundImage={content.hero.backgroundImage}
        variant="service"
      />

      {/* Service Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {locale === 'de' ? 'Warum unser Service?' : 'Why Our Service?'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'de' 
                ? 'Professionelle Lösungen, die speziell auf Ihre Geschäftsanforderungen zugeschnitten sind.'
                : 'Professional solutions specifically tailored to your business requirements.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-start space-x-4">
                  <CheckIcon className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Block for specific service */}
      <FeaturesBlock service={serviceKey} variant="grid" />

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {content.process.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'de' 
                ? 'Unser bewährter Schritt-für-Schritt-Ansatz für Ihren Erfolg.'
                : 'Our proven step-by-step approach to your success.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-white">{index + 1}</span>
                  </div>
                  {index < content.process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-200 to-blue-200" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Berlin Location CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  {locale === 'de' 
                    ? `${content.hero.title} in Berlin`
                    : `${content.hero.title} in Berlin`
                  }
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {locale === 'de' 
                    ? 'Als Berlin-basierte Agentur verstehen wir den lokalen Markt und die besonderen Herausforderungen von Unternehmen in der Hauptstadt.'
                    : 'As a Berlin-based agency, we understand the local market and the unique challenges of businesses in the capital.'
                  }
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      {locale === 'de' ? 'Lokale Marktkenntnis' : 'Local market knowledge'}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      {locale === 'de' ? 'Persönliche Betreuung vor Ort' : 'Personal on-site support'}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      {locale === 'de' ? 'Berlin-spezifische SEO-Optimierung' : 'Berlin-specific SEO optimization'}
                    </span>
                  </li>
                </ul>
                <Link
                  href={`/${locale}/services/${service}/berlin`}
                  className="inline-flex items-center btn-primary group"
                >
                  {locale === 'de' ? 'Mehr über Berlin Service' : 'More about Berlin Service'}
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="/Images/igor-omilaev-eGGFZ5X2LnA-unsplash.jpg"
                  alt="Berlin Office"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-green-500/20 to-blue-500/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABlock
        title={locale === 'de' 
          ? `Bereit für Ihr ${content.hero.title} Projekt?`
          : `Ready for Your ${content.hero.title} Project?`
        }
        subtitle={locale === 'de' 
          ? 'Kontaktieren Sie uns für eine kostenlose Beratung und lassen Sie uns Ihre Ziele besprechen.'
          : 'Contact us for a free consultation and let\'s discuss your goals.'
        }
        variant="default"
      />

      <Footer />
    </>
  );
}
