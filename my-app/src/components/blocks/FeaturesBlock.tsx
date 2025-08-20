import { useTranslations } from 'next-intl';
import CheckIcon from '../icons/CheckIcon';
import WebsiteIcon from '../icons/WebsiteIcon';
import SEOIcon from '../icons/SEOIcon';
import AutomationIcon from '../icons/AutomationIcon';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits?: string[];
}

interface FeaturesBlockProps {
  title?: string;
  subtitle?: string;
  service?: 'websites' | 'seoMarketing' | 'agenticAutomation';
  variant?: 'grid' | 'list';
  className?: string;
}

export default function FeaturesBlock({
  title,
  subtitle,
  service,
  variant = 'grid',
  className = ''
}: FeaturesBlockProps) {
  const t = useTranslations();

  const getServiceFeatures = (): Feature[] => {
    switch (service) {
      case 'websites':
        return [
          {
            icon: <WebsiteIcon className="w-12 h-12 text-green-600" />,
            title: t('services.websites.title'),
            description: t('services.websites.description'),
            benefits: [
              'Responsive Design',
              'SEO Optimized',
              'Fast Loading Speed',
              'Modern Technologies'
            ]
          },
          {
            icon: <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 text-2xl">📱</span>
            </div>,
            title: 'Mobile-First Approach',
            description: 'All websites are designed with mobile users as the primary focus, ensuring perfect functionality across all devices.',
            benefits: [
              'Touch-Friendly Interface',
              'Optimized for Mobile',
              'Cross-Browser Compatible',
              'Progressive Web App Ready'
            ]
          },
          {
            icon: <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-orange-600 text-2xl">⚡</span>
            </div>,
            title: 'Performance Optimization',
            description: 'Lightning-fast websites that provide excellent user experience and better search engine rankings.',
            benefits: [
              'Core Web Vitals Optimized',
              'Image Optimization',
              'Code Splitting',
              'CDN Integration'
            ]
          },
          {
            icon: <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 text-2xl">🔒</span>
            </div>,
            title: 'Security & Maintenance',
            description: 'Secure, maintainable code with regular updates and security patches to keep your website safe.',
            benefits: [
              'SSL Certificates',
              'Regular Security Updates',
              'Backup Systems',
              'Monitoring & Support'
            ]
          }
        ];
      
      case 'seoMarketing':
        return [
          {
            icon: <SEOIcon className="w-12 h-12 text-green-600" />,
            title: 'Technical SEO',
            description: 'Complete technical optimization to ensure search engines can crawl and index your website effectively.',
            benefits: [
              'Site Speed Optimization',
              'Mobile-First Indexing',
              'Schema Markup',
              'XML Sitemaps'
            ]
          },
          {
            icon: <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 text-2xl">📊</span>
            </div>,
            title: 'Content Strategy',
            description: 'Data-driven content strategies that target the right keywords and engage your target audience.',
            benefits: [
              'Keyword Research',
              'Content Planning',
              'Competitor Analysis',
              'Performance Tracking'
            ]
          },
          {
            icon: <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-orange-600 text-2xl">🎯</span>
            </div>,
            title: 'Local SEO',
            description: 'Dominate local search results in Berlin with targeted local SEO strategies and optimization.',
            benefits: [
              'Google My Business',
              'Local Citations',
              'Review Management',
              'Local Link Building'
            ]
          },
          {
            icon: <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 text-2xl">📈</span>
            </div>,
            title: 'Analytics & Reporting',
            description: 'Comprehensive tracking and reporting to measure success and optimize your SEO performance.',
            benefits: [
              'Google Analytics Setup',
              'Conversion Tracking',
              'Monthly Reports',
              'ROI Analysis'
            ]
          }
        ];
      
      case 'agenticAutomation':
        return [
          {
            icon: <AutomationIcon className="w-12 h-12 text-green-600" />,
            title: 'Intelligent Process Automation',
            description: 'AI-powered automation that learns and adapts to your business processes for maximum efficiency.',
            benefits: [
              'Machine Learning Integration',
              'Adaptive Workflows',
              'Error Reduction',
              'Continuous Improvement'
            ]
          },
          {
            icon: <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 text-2xl">🤖</span>
            </div>,
            title: 'Agentic AI Solutions',
            description: 'Advanced AI agents that can make decisions, interact with systems, and handle complex tasks autonomously.',
            benefits: [
              'Decision Making',
              'System Integration',
              'Natural Language Processing',
              'Autonomous Operation'
            ]
          },
          {
            icon: <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-orange-600 text-2xl">🔗</span>
            </div>,
            title: 'API Integration',
            description: 'Seamless integration with your existing tools and platforms to create unified automated workflows.',
            benefits: [
              'CRM Integration',
              'Email Automation',
              'Database Sync',
              'Third-party APIs'
            ]
          },
          {
            icon: <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 text-2xl">📊</span>
            </div>,
            title: 'Performance Monitoring',
            description: 'Real-time monitoring and analytics to track automation performance and identify optimization opportunities.',
            benefits: [
              'Real-time Dashboards',
              'Performance Metrics',
              'Alert Systems',
              'Optimization Recommendations'
            ]
          }
        ];
      
      default:
        return [
          {
            icon: <WebsiteIcon className="w-12 h-12 text-green-600" />,
            title: 'Professional Websites',
            description: 'Modern, responsive websites that convert visitors into customers.',
            benefits: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern Tech Stack']
          },
          {
            icon: <SEOIcon className="w-12 h-12 text-blue-600" />,
            title: 'SEO Marketing',
            description: 'Data-driven SEO strategies to boost your search engine rankings.',
            benefits: ['Keyword Research', 'Technical SEO', 'Content Strategy', 'Analytics']
          },
          {
            icon: <AutomationIcon className="w-12 h-12 text-orange-600" />,
            title: 'AI Automation',
            description: 'Intelligent automation solutions powered by advanced AI agents.',
            benefits: ['Process Automation', 'AI Integration', 'Workflow Optimization', 'Cost Reduction']
          }
        ];
    }
  };

  const features = getServiceFeatures();
  const blockTitle = title || (service ? t(`blocks.features.title`, { service: t(`services.${service}.title`) }) : t('blocks.features.title', { service: 'Services' }));
  const blockSubtitle = subtitle || t('blocks.features.subtitle');

  return (
    <section className={`section-padding bg-gray-50 ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {blockTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {blockSubtitle}
          </p>
        </div>

        {variant === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                {feature.benefits && (
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-500">
                        <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="mb-6 lg:mb-0 flex justify-center lg:justify-start">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {feature.description}
                  </p>
                  {feature.benefits && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
