import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  background = 'white',
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundClasses[background]} ${className}`}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
