import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-12 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {title && (
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-8">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
