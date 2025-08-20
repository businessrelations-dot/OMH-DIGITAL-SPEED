import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from '../../../../../components/Header';
import Footer from '../../../../../components/Footer';
import HeroBlock from '../../../../../components/blocks/HeroBlock';
import FeaturesBlock from '../../../../../components/blocks/FeaturesBlock';
import CTABlock from '../../../../../components/blocks/CTABlock';
import Image from 'next/image';
import CheckIcon from '../../../../../components/icons/CheckIcon';
import Link from 'next/link';
import ArrowRightIcon from '../../../../../components/icons/ArrowRightIcon';

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

const locations = ['berlin'] as const;

export function generateStaticParams() {
  const params: { locale: string; service: string; location: string }[] = [];
  
  // Generate for all locales, services, and locations
  Object.entries(services).forEach(([locale, servicesList]) => {
    servicesList.forEach(service => {
      locations.forEach(location => {
        params.push({ locale, service, location });
      });
    });
  });
  
  return params;
}

export async function generateMetadata({params}: {params: {locale: string; service: string; location: string}}) {
  const {locale, service, location} = params;
  
  const serviceKey = serviceMap[service as keyof typeof serviceMap];
  if (!serviceKey || !locations.includes(location as any)) return {};

  const locationName = location.charAt(0).toUpperCase() + location.slice(1);
  
  const titles = {
    websites: {
      en: `Professional Website Development in ${locationName} | OMH Digital`,
      de: `Professionelle Webseiten-Entwicklung in ${locationName} | OMH Digital`
    },
    seoMarketing: {
      en: `SEO Marketing Services in ${locationName} | Local Digital Marketing`,
      de: `SEO Marketing Services in ${locationName} | Lokales Digital Marketing`  
    },
    agenticAutomation: {
      en: `AI Automation Services in ${locationName} | Local Agentic AI Solutions`,
      de: `KI Automatisierung Services in ${locationName} | Lokale Agentic AI Lösungen`
    }
  };

  const descriptions = {
    websites: {
      en: `Expert website development services in ${locationName}. Local agency offering modern, responsive web solutions. Contact us for ${locationName} website development!`,
      de: `Experten-Webseiten-Entwicklung in ${locationName}. Lokale Agentur für moderne, responsive Web-Lösungen. Kontaktieren Sie uns für Webseiten-Entwicklung in ${locationName}!`
    },
    seoMarketing: {
      en: `Professional SEO marketing services in ${locationName}. Local SEO experts helping ${locationName} businesses rank higher on Google. Get found locally!`,
      de: `Professionelle SEO Marketing Services in ${locationName}. Lokale SEO-Experten helfen ${locationName} Unternehmen bei besseren Google-Rankings. Lokal gefunden werden!`
    },
    agenticAutomation: {
      en: `AI automation services in ${locationName}. Transform your ${locationName} business with intelligent automation solutions. Local agentic AI experts.`,
      de: `KI-Automatisierung Services in ${locationName}. Transformieren Sie Ihr ${locationName} Unternehmen mit intelligenten Automatisierungslösungen. Lokale Agentic AI Experten.`
    }
  };

  return {
    title: titles[serviceKey][locale as keyof typeof titles[typeof serviceKey]],
    description: descriptions[serviceKey][locale as keyof typeof descriptions[typeof serviceKey]],
    keywords: locale === 'de' 
      ? `${service} ${locationName}, Digitale Agentur ${locationName}, Online Marketing ${locationName}, Webentwicklung ${locationName}, SEO ${locationName}`
      : `${service} ${locationName}, Digital Agency ${locationName}, Online Marketing ${locationName}, Web Development ${locationName}, SEO ${locationName}`,
    alternates: {
      canonical: `/${locale}/services/${service}/${location}`,
      languages: {
        'en': `/en/services/${locale === 'de' && service === 'webseiten' ? 'websites' : service}/${location}`,
        'de': `/de/services/${locale === 'en' && service === 'websites' ? 'webseiten' : service}/${location}`,
      }
    }
  };
}

export default function ServiceLocationPage({params}: {params: {locale: string; service: string; location: string}}) {
  const t = useTranslations();
  const {locale, service, location} = params;

  const serviceKey = serviceMap[service as keyof typeof serviceMap];
  if (!serviceKey || !locations.includes(location as any)) {
    notFound();
  }

  const locationName = location.charAt(0).toUpperCase() + location.slice(1);

  const getServiceLocationContent = () => {
    const baseContent = {
      websites: {
        title: locale === 'de' 
          ? `Professionelle Webseiten-Entwicklung in ${locationName}`
          : `Professional Website Development in ${locationName}`,
        description: locale === 'de'
          ? `Moderne, responsive Webseiten für Unternehmen in ${locationName}. Lokale Expertise mit globalem Standard.`
          : `Modern, responsive websites for businesses in ${locationName}. Local expertise with global standards.`,
        backgroundImage: '/Images/cherrydeck-rMILC1PIwM0-unsplash.jpg',
        localBenefits: [
          {
            title: locale === 'de' ? `${locationName} Marktkenntnis` : `${locationName} Market Knowledge`,
            description: locale === 'de'
              ? `Wir verstehen den lokalen ${locationName} Markt und die Bedürfnisse Ihrer Zielgruppe.`
              : `We understand the local ${locationName} market and your target audience's needs.`
          },
          {
            title: locale === 'de' ? 'Lokale SEO-Optimierung' : 'Local SEO Optimization',
            description: locale === 'de'
              ? `Optimierung für lokale ${locationName} Suchanfragen und Google My Business.`
              : `Optimization for local ${locationName} searches and Google My Business.`
          },
          {
            title: locale === 'de' ? 'Persönliche Betreuung' : 'Personal Support',
            description: locale === 'de'
              ? `Persönliche Betreuung vor Ort in ${locationName} für Ihre Projekte.`
              : `Personal on-site support in ${locationName} for your projects.`
          },
          {
            title: locale === 'de' ? `${locationName} Netzwerk` : `${locationName} Network`,
            description: locale === 'de'
              ? `Zugang zu unserem lokalen ${locationName} Partnernetzwerk und Ressourcen.`
              : `Access to our local ${locationName} partner network and resources.`
          }
        ],
        caseStudies: [
          {
            title: locale === 'de' ? `Erfolgsgeschichte: ${locationName} Startup` : `Success Story: ${locationName} Startup`,
            description: locale === 'de'
              ? `Ein ${locationName} Tech-Startup konnte durch unsere Website 300% mehr Leads generieren.`
              : `A ${locationName} tech startup generated 300% more leads through our website.`,
            metrics: ['300% mehr Leads', '150% mehr Traffic', '85% bessere Conversion']
          },
          {
            title: locale === 'de' ? `${locationName} E-Commerce Erfolg` : `${locationName} E-Commerce Success`,
            description: locale === 'de'
              ? `Ein lokaler ${locationName} Online-Shop steigerte den Umsatz um 250% nach dem Relaunch.`
              : `A local ${locationName} online shop increased revenue by 250% after the relaunch.`,
            metrics: ['250% mehr Umsatz', '180% mehr Bestellungen', '90% Mobile Traffic']
          }
        ]
      },
      seoMarketing: {
        title: locale === 'de' 
          ? `SEO Marketing & Optimierung in ${locationName}`
          : `SEO Marketing & Optimization in ${locationName}`,
        description: locale === 'de'
          ? `Datengetriebene SEO-Strategien für bessere Rankings in ${locationName}. Lokale SEO-Experten mit nachweislichen Erfolgen.`
          : `Data-driven SEO strategies for better rankings in ${locationName}. Local SEO experts with proven results.`,
        backgroundImage: '/Images/fabio-oyXis2kALVg-unsplash.jpg',
        localBenefits: [
          {
            title: locale === 'de' ? `Local SEO ${locationName}` : `Local SEO ${locationName}`,
            description: locale === 'de'
              ? `Dominieren Sie die lokalen Suchergebnisse in ${locationName} und Umgebung.`
              : `Dominate local search results in ${locationName} and surrounding areas.`
          },
          {
            title: locale === 'de' ? `${locationName} Keywords` : `${locationName} Keywords`,
            description: locale === 'de'
              ? `Optimierung für die wichtigsten ${locationName}-spezifischen Suchbegriffe.`
              : `Optimization for the most important ${locationName}-specific search terms.`
          },
          {
            title: locale === 'de' ? 'Google My Business' : 'Google My Business',
            description: locale === 'de'
              ? `Optimierung Ihres Google My Business Profils für bessere lokale Sichtbarkeit.`
              : `Optimization of your Google My Business profile for better local visibility.`
          },
          {
            title: locale === 'de' ? 'Lokale Citations' : 'Local Citations',
            description: locale === 'de'
              ? `Aufbau von lokalen ${locationName} Citations und Branchenverzeichnissen.`
              : `Building local ${locationName} citations and industry directories.`
          }
        ],
        caseStudies: [
          {
            title: locale === 'de' ? `${locationName} Restaurant Erfolg` : `${locationName} Restaurant Success`,
            description: locale === 'de'
              ? `Ein ${locationName} Restaurant erreichte #1 Rankings für lokale Suchbegriffe.`
              : `A ${locationName} restaurant achieved #1 rankings for local search terms.`,
            metrics: ['#1 für "Restaurant ' + locationName + '"', '400% mehr Website-Besucher', '200% mehr Reservierungen']
          },
          {
            title: locale === 'de' ? `${locationName} Anwaltskanzlei` : `${locationName} Law Firm`,
            description: locale === 'de'
              ? `Eine ${locationName} Anwaltskanzlei konnte ihre Online-Sichtbarkeit um 500% steigern.`
              : `A ${locationName} law firm increased online visibility by 500%.`,
            metrics: ['500% mehr Sichtbarkeit', '300% mehr Anfragen', 'Top 3 Rankings']
          }
        ]
      },
      agenticAutomation: {
        title: locale === 'de' 
          ? `Agentic KI Automatisierung in ${locationName}`
          : `Agentic AI Automation in ${locationName}`,
        description: locale === 'de'
          ? `Intelligente Automatisierungslösungen für ${locationName} Unternehmen. KI-Experten vor Ort für maximale Effizienz.`
          : `Intelligent automation solutions for ${locationName} businesses. On-site AI experts for maximum efficiency.`,
        backgroundImage: '/Images/boliviainteligente-dCvqMHRUIhY-unsplash.jpg',
        localBenefits: [
          {
            title: locale === 'de' ? `${locationName} Business Integration` : `${locationName} Business Integration`,
            description: locale === 'de'
              ? `Nahtlose Integration in bestehende ${locationName} Geschäftsprozesse.`
              : `Seamless integration into existing ${locationName} business processes.`
          },
          {
            title: locale === 'de' ? 'Lokaler Support' : 'Local Support',
            description: locale === 'de'
              ? `24/7 technischer Support und Wartung vor Ort in ${locationName}.`
              : `24/7 technical support and maintenance on-site in ${locationName}.`
          },
          {
            title: locale === 'de' ? 'Compliance & Datenschutz' : 'Compliance & Data Privacy',
            description: locale === 'de'
              ? `Einhaltung aller deutschen und ${locationName} spezifischen Datenschutzbestimmungen.`
              : `Compliance with all German and ${locationName}-specific data privacy regulations.`
          },
          {
            title: locale === 'de' ? 'Skalierbare Lösungen' : 'Scalable Solutions',
            description: locale === 'de'
              ? `Lösungen, die mit Ihrem ${locationName} Unternehmen mitwachsen.`
              : `Solutions that grow with your ${locationName} business.`
          }
        ],
        caseStudies: [
          {
            title: locale === 'de' ? `${locationName} Logistikunternehmen` : `${locationName} Logistics Company`,
            description: locale === 'de'
              ? `Ein ${locationName} Logistikunternehmen reduzierte Kosten um 40% durch KI-Automatisierung.`
              : `A ${locationName} logistics company reduced costs by 40% through AI automation.`,
            metrics: ['40% Kosteneinsparung', '60% weniger Fehler', '90% Automatisierungsgrad']
          },
          {
            title: locale === 'de' ? `${locationName} Fintech Startup` : `${locationName} Fintech Startup`,
            description: locale === 'de'
              ? `Ein ${locationName} Fintech konnte die Bearbeitungszeit um 80% reduzieren.`
              : `A ${locationName} fintech reduced processing time by 80%.`,
            metrics: ['80% schnellere Bearbeitung', '95% Genauigkeit', '200% mehr Durchsatz']
          }
        ]
      }
    };

    return baseContent[serviceKey];
  };

  const content = getServiceLocationContent();
  if (!content) {
    notFound();
  }

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <HeroBlock
        title={content.title}
        subtitle={content.description}
        ctaText={locale === 'de' ? 'Kostenlose Beratung' : 'Free Consultation'}
        backgroundImage={content.backgroundImage}
        variant="location"
      />

      {/* Local Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {locale === 'de' ? `Warum OMH Digital für ${locationName}?` : `Why OMH Digital for ${locationName}?`}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'de' 
                ? `Als lokale Agentur in ${locationName} verstehen wir Ihre Herausforderungen und bieten maßgeschneiderte Lösungen.`
                : `As a local agency in ${locationName}, we understand your challenges and provide tailored solutions.`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {content.localBenefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
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

      {/* Case Studies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {locale === 'de' ? `Erfolgsgeschichten aus ${locationName}` : `Success Stories from ${locationName}`}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'de' 
                ? `Sehen Sie, wie wir anderen ${locationName} Unternehmen zum Erfolg verholfen haben.`
                : `See how we've helped other ${locationName} businesses succeed.`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {study.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                      <div className="text-lg font-semibold text-green-600">
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  {locale === 'de' 
                    ? `Lokale Präsenz in ${locationName}`
                    : `Local Presence in ${locationName}`
                  }
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {locale === 'de' 
                    ? `Wir sind stolz darauf, Teil der ${locationName} Community zu sein und lokalen Unternehmen beim Wachstum zu helfen.`
                    : `We're proud to be part of the ${locationName} community and help local businesses grow.`
                  }
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-green-600 text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {locale === 'de' ? `${locationName} Büro` : `${locationName} Office`}
                      </h4>
                      <p className="text-gray-600">Keithstraße 16, 10787 Berlin</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 text-xl">🤝</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {locale === 'de' ? 'Lokale Partnerschaften' : 'Local Partnerships'}
                      </h4>
                      <p className="text-gray-600">
                        {locale === 'de' 
                          ? `Zusammenarbeit mit ${locationName} Unternehmen`
                          : `Collaboration with ${locationName} businesses`
                        }
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center btn-primary group"
                >
                  {locale === 'de' ? 'Termin vereinbaren' : 'Schedule Meeting'}
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="/Images/igor-omilaev-eGGFZ5X2LnA-unsplash.jpg"
                  alt={`${locationName} Office`}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-green-500/20 to-blue-500/20" />
                
                {/* Floating location badge */}
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🏢</span>
                    <div>
                      <div className="font-semibold text-gray-900">{locationName} Based</div>
                      <div className="text-sm text-gray-600">
                        {locale === 'de' ? 'Lokale Expertise' : 'Local Expertise'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {locale === 'de' ? 'Interessiert an anderen Services?' : 'Interested in Other Services?'}
          </h2>
          <p className="text-gray-600 mb-8">
            {locale === 'de' 
              ? `Entdecken Sie unser vollständiges Service-Angebot für ${locationName} Unternehmen.`
              : `Discover our complete service offering for ${locationName} businesses.`
            }
          </p>
          <Link
            href={`/${locale}/services/${service}`}
            className="inline-flex items-center btn-outline group"
          >
            {locale === 'de' ? 'Alle Services ansehen' : 'View All Services'}
            <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <CTABlock
        title={locale === 'de' 
          ? `Bereit, Ihr ${locationName} Unternehmen zu transformieren?`
          : `Ready to Transform Your ${locationName} Business?`
        }
        subtitle={locale === 'de' 
          ? `Kontaktieren Sie unsere ${locationName} Experten für eine kostenlose Beratung.`
          : `Contact our ${locationName} experts for a free consultation.`
        }
        variant="default"
      />

      <Footer />
    </>
  );
}
