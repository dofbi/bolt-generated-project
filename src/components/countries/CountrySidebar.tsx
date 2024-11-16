import React, { useState } from 'react';
    import { 
      FaFilter, 
      FaGlobeAfrica, 
      FaVoteYea, 
      FaBalanceScale 
    } from 'react-icons/fa';

    const filterSections = [
      {
        title: 'Régions',
        icon: FaGlobeAfrica,
        items: [
          { label: 'Afrique du Nord', count: 5, key: 'north' },
          { label: 'Afrique de l\'Ouest', count: 15, key: 'west' },
          { label: 'Afrique Centrale', count: 8, key: 'central' },
          { label: 'Afrique de l\'Est', count: 10, key: 'east' },
          { label: 'Afrique Australe', count: 6, key: 'south' }
        ]
      },
      {
        title: 'Type d\'Élection',
        icon: FaVoteYea,
        items: [
          { label: 'Présidentielle', count: 12, key: 'presidential' },
          { label: 'Législative', count: 20, key: 'legislative' },
          { label: 'Municipale', count: 8, key: 'municipal' },
          { label: 'Référendum', count: 3, key: 'referendum' }
        ]
      },
      {
        title: 'Statut Électoral',
        icon: FaBalanceScale,
        items: [
          { label: 'Élection Prochaine', count: 7, key: 'upcoming' },
          { label: 'Élection Récente', count: 15, key: 'recent' },
          { label: 'En Préparation', count: 5, key: 'preparation' }
        ]
      }
    ];

    interface FilterState {
      [key: string]: boolean;
    }

    const CountrySidebar: React.FC = () => {
      const [activeFilters, setActiveFilters] = useState<FilterState>({});

      const toggleFilter = (key: string) => {
        setActiveFilters(prev => ({
          ...prev,
          [key]: !prev[key]
        }));
      };

      return (
        <aside className="w-64 bg-white shadow-md rounded-lg p-6 sticky top-6">
          <div className="flex items-center mb-6">
            <FaFilter className="mr-2 text-africa-secondary" />
            <h2 className="text-xl font-bold text-africa-primary">Filtres</h2>
          </div>

          {filterSections.map(section => (
            <div key={section.title} className="mb-6">
              <div className="flex items-center mb-3">
                <section.icon className="mr-2 text-africa-accent" />
                <h3 className="font-semibold text-africa-primary">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map(item => (
                  <li 
                    key={item.key} 
                    className="flex justify-between items-center"
                  >
                    <label className="inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="form-checkbox text-africa-accent mr-2"
                        checked={!!activeFilters[item.key]}
                        onChange={() => toggleFilter(item.key)}
                      />
                      <span className="text-gray-700">{item.label}</span>
                    </label>
                    <span className="text-sm text-gray-500">({item.count})</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-6 pt-4 border-t border-gray-200">
            <button
              className="w-full bg-africa-secondary text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors"
              onClick={() => setActiveFilters({})}
            >
              Réinitialiser les Filtres
            </button>
          </div>
        </aside>
      );
    };

    export default CountrySidebar;
