import { useTranslations } from 'next-intl';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import HeroBlock from '../../../components/blocks/HeroBlock';
import CTABlock from '../../../components/blocks/CTABlock';

export async function generateMetadata({params}: {params: {locale: string}}) {
  const {locale} = params;
  
  return {
    title: locale === 'de' 
      ? "Kontakt - OMH Digital | Digitale Agentur Berlin"
      : "Contact - OMH Digital | Digital Agency Berlin",
    description: locale === 'de'
      ? "Kontaktieren Sie OMH Digital für Ihre digitalen Projekte. Webseiten, SEO Marketing und KI-Automatisierung in Berlin. Kostenlose Beratung!"
      : "Contact OMH Digital for your digital projects. Websites, SEO marketing, and AI automation in Berlin. Free consultation!",
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        'en': '/en/contact',
        'de': '/de/contact',
      }
    }
  };
}

export default function ContactPage({params}: {params: {locale: string}}) {
  const t = useTranslations();
  const {locale} = params;

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: locale === 'de' ? "Schreiben Sie uns eine E-Mail" : "Send us an email",
      contact: "info@omh.net",
      href: "mailto:info@omh.net"
    },
    {
      icon: "📍",
      title: locale === 'de' ? "Büro Berlin" : "Berlin Office",
      description: locale === 'de' ? "Besuchen Sie uns in Berlin" : "Visit us in Berlin",
      contact: "Keithstraße 16, 10787 Berlin",
      href: "https://maps.google.com/?q=Keithstraße+16,+10787+Berlin"
    },
    {
      icon: "🚀",
      title: locale === 'de' ? "Schnelle Antwort" : "Quick Response",
      description: locale === 'de' ? "Antwort innerhalb von 24 Stunden" : "Response within 24 hours",
      contact: locale === 'de' ? "Garantierte schnelle Bearbeitung" : "Guaranteed fast processing",
      href: null
    }
  ];

  const services = [
    {
      title: t('services.websites.title'),
      description: t('services.websites.description'),
      slug: t('services.websites.slug')
    },
    {
      title: t('services.seoMarketing.title'),
      description: t('services.seoMarketing.description'),
      slug: t('services.seoMarketing.slug')
    },
    {
      title: t('services.agenticAutomation.title'),
      description: t('services.agenticAutomation.description'),
      slug: t('services.agenticAutomation.slug')
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <HeroBlock
        title={t('contact.title')}
        subtitle={t('contact.getInTouch')}
        description={locale === 'de' 
          ? "Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Wir freuen uns auf Ihre Nachricht und melden uns schnellstmöglich bei Ihnen."
          : "Have questions or want to discuss a project? We look forward to your message and will get back to you as soon as possible."
        }
        ctaText={locale === 'de' ? "Nachricht senden" : "Send Message"}
        ctaLink="#contact-form"
        variant="service"
        backgroundImage="/Images/austin-distel-wawEfYdpkag-unsplash.jpg"
      />

      {/* Contact Methods */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {locale === 'de' ? 'So erreichen Sie uns' : 'Get in Touch'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'de' 
                ? 'Wir sind hier, um Ihnen bei Ihren digitalen Herausforderungen zu helfen. Kontaktieren Sie uns über einen der folgenden Wege.'
                : 'We are here to help you with your digital challenges. Contact us through one of the following ways.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-green-600 hover:text-green-700 font-medium"
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {method.contact}
                  </a>
                ) : (
                  <span className="text-gray-700 font-medium">
                    {method.contact}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {locale === 'de' ? 'Projekt besprechen' : 'Discuss Your Project'}
                </h2>
                <p className="text-gray-600 mb-8">
                  {locale === 'de' 
                    ? 'Erzählen Sie uns von Ihrem Projekt und wir erstellen Ihnen ein maßgeschneidertes Angebot.'
                    : 'Tell us about your project and we will create a customized proposal for you.'
                  }
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'de' ? 'Vorname' : 'First Name'}
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'de' ? 'Nachname' : 'Last Name'}
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'de' ? 'Unternehmen (optional)' : 'Company (optional)'}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'de' ? 'Interessiert an' : 'Interested in'}
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">
                        {locale === 'de' ? 'Service auswählen' : 'Select a service'}
                      </option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.slug}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'de' ? 'Nachricht' : 'Message'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder={locale === 'de' 
                        ? 'Beschreiben Sie Ihr Projekt oder Ihre Anfrage...'
                        : 'Describe your project or inquiry...'
                      }
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    {locale === 'de' ? 'Nachricht senden' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Company Info */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  OMH Digital GmbH
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t('contact.address')}
                    </h4>
                    <p className="text-gray-600">
                      Keithstraße 16<br />
                      10787 Berlin<br />
                      {t('common.germany')}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t('contact.email')}
                    </h4>
                    <a href="mailto:info@omh.net" className="text-green-600 hover:text-green-700">
                      info@omh.net
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {locale === 'de' ? 'Geschäftszeiten' : 'Business Hours'}
                    </h4>
                    <p className="text-gray-600">
                      {locale === 'de' ? 'Montag - Freitag: 9:00 - 18:00' : 'Monday - Friday: 9:00 AM - 6:00 PM'}<br />
                      {locale === 'de' ? 'Samstag - Sonntag: Geschlossen' : 'Saturday - Sunday: Closed'}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      {locale === 'de' ? 'Warum OMH Digital?' : 'Why OMH Digital?'}
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {locale === 'de' ? '5+ Jahre Erfahrung' : '5+ Years Experience'}
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {locale === 'de' ? 'Berlin-basiert' : 'Berlin-based'}
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {locale === 'de' ? 'KI-powered Lösungen' : 'AI-powered Solutions'}
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {locale === 'de' ? '100% Kundenzufriedenheit' : '100% Client Satisfaction'}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABlock
        variant="contact"
      />

      <Footer />
    </>
  );
}
