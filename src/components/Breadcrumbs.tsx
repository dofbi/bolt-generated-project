import React from 'react';

    interface BreadcrumbItem {
      label: string;
      href?: string;
    }

    interface BreadcrumbsProps {
      items: BreadcrumbItem[];
    }

    const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
      return (
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            {items.map((item, index) => (
              <li key={item.label} className="flex items-center">
                {item.href ? (
                  <a 
                    href={item.href} 
                    className="hover:text-africa-secondary transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="font-semibold">{item.label}</span>
                )}
                
                {index < items.length - 1 && (
                  <span className="mx-2">/</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      );
    };

    export default Breadcrumbs;
