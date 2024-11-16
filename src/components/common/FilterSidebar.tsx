import React, { useState } from 'react';
    import Icon from './Icon';

    interface FilterOption {
      label: string;
      value: string;
      count?: number;
    }

    interface FilterSection {
      title: string;
      name: string;
      options: FilterOption[];
    }

    interface FilterSidebarProps {
      sections: FilterSection[];
      onFilterChange: (filters: Record<string, string[]>) => void;
    }

    const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
      sections,
      onFilterChange 
    }) => {
      const [filters, setFilters] = useState<Record<string, string[]>>({});

      const handleFilterChange = (sectionName: string, value: string) => {
        const newFilters = { ...filters };
        
        if (!newFilters[sectionName]) {
          newFilters[sectionName] = [];
        }

        if (newFilters[sectionName].includes(value)) {
          newFilters[sectionName] = newFilters[sectionName].filter(v => v !== value);
        } else {
          newFilters[sectionName] = [...newFilters[sectionName], value];
        }

        setFilters(newFilters);
        onFilterChange(newFilters);
      };

      const resetFilters = () => {
        setFilters({});
        onFilterChange({});
      };

      return (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-[#2C3E50]">Filtres</h2>
            <button
              onClick={resetFilters}
              className="text-sm text-[#3498DB] hover:underline"
            >
              Réinitialiser
            </button>
          </div>

          {sections.map(section => (
            <div key={section.name} className="mb-6">
              <h3 className="font-semibold mb-3 text-[#2C3E50]">
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.options.map(option => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters[section.name]?.includes(option.value) || false}
                      onChange={() => handleFilterChange(section.name, option.value)}
                      className="mr-2"
                    />
                    <span className="text-gray-700">{option.label}</span>
                    {option.count !== undefined && (
                      <span className="ml-auto text-sm text-gray-500">
                        ({option.count})
                      </span>
                    )}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    };

    export default FilterSidebar;
